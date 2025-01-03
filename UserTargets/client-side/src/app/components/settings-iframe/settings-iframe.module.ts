import { ChangeDetectorRef, ElementRef, NgModule, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import {
    PepLoaderService,
    // PepHttpService,
    PepNgxLibModule, PepSessionService } from '@pepperi-addons/ngx-lib';
import { Subscription } from 'rxjs';
import { PapiClient } from '@pepperi-addons/papi-sdk';
import jwt from 'jwt-decode';
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'pep-settings-iframe',
    template: `<div id="settings-iframe-container">
                  <iframe *ngIf="iframeCookieVersionSrc" style="display:none"
                          width="0px" height="0px"  [src]="iframeCookieVersionSrc | safe"></iframe>
                  <iframe *ngIf="iframeSRC"  #settingsIframe class="embed-responsive-item" id="myFrame"
                  [ngStyle]="{'min-height': 'calc(100vh - ' + this?.top +'px)'}" width="100%" [src]="iframeSRC | safe"></iframe>
               </div>`,
    styles: ['#myFrame { border-top: 16px solid transparent}']
  })
  export class SettingsIframeComponent implements OnInit, OnChanges {

    static BASE_URL_KEY = 'NewStudioUrl';
    iframeCookieVersionSrc = null;
    iframeSRC = null;
    baseURL;
    subscription: Subscription;
    accessToken = '';
    parsedToken: any;
    papiBaseURL = '';
    pluginUUID;
    top = '70';
    browserLang = 'en';

    @Input() options;
    @Output() change: EventEmitter<any> = new EventEmitter();
    @ViewChild('settingsIframe', {static: false}) settingsIframe: ElementRef;

    @HostListener('window:message', ['$event']) onPostMessage(event) {
        if (event?.data != 'unchanged'){
            switch(event?.data?.msgName) {
                case 'general-save':
                    this.change.emit(event.data);
                    break;
                case 'init-loading':
                    this.loaderService.show();
                    break;
                case 'done-loading':
                    this.loaderService.hide();
                    break;
                case 'no-session':
                    window.location.reload();
                    break;
                default:
                    break;
            }
        }


    }

    get papiClient(): PapiClient {
        return new PapiClient({
            baseURL: this.papiBaseURL,
            token: this.session.getIdpToken(),
            addonUUID: this.pluginUUID,
            suppressLogging:true
        })
    }

    constructor(
        private session:  PepSessionService,
        public loaderService: PepLoaderService,
        // private translate: TranslateService,

      ) {
        this.browserLang = window.navigator.language;//translate.getBrowserLang();
        const accessToken = this.session.getIdpToken();
        this.parsedToken = jwt(accessToken);
        this.papiBaseURL = this.parsedToken["pepperi.baseurl"]
        debugger;
      }

    ngOnInit(){
        this.top = this.options?.addonData?.top ? this.options?.addonData?.top : '70';
    }

    ngOnChanges(changes: SimpleChanges | any) {
       const options = changes?.UUID ? changes : changes?.options?.currentValue;
       if (options){
        this.start(options);
       }

    }

    start(options){
        if (!options?.addon){
            this.papiClient.addons.installedAddons
              .get(options?.UUID).then(addon => {
          //   this.http.getPapiApiCall(`/addons/installed_addons/${this.options?.UUID}`)
          //         .subscribe(addon =>{
                      options.addon = addon;
                      this.init(options);
                  });
          }
          else {
            this.init(options);
          }
    }

    init(options){
      let baseURL = sessionStorage.getItem(SettingsIframeComponent.BASE_URL_KEY);
        if (!baseURL){
          this.papiClient.get('/configuration_fields?key=NewStudioUrl').then(res => {
              this.baseURL = res.Value;
              sessionStorage.setItem(SettingsIframeComponent.BASE_URL_KEY, this.baseURL);
              this.iframeCookieVersionSrc = `${this.baseURL}/cookieVersion.html?ver=${options?.addon?.Version}`;
              this.changeSrc(`${this.baseURL}/${options?.path}`);
          });
        }
        else {
            this.iframeCookieVersionSrc = `${baseURL}/cookieVersion.html?ver=${options?.addon?.Version}`;
            this.changeSrc(`${baseURL}/${options?.path}`);
        }
    }

    changeSrc(path){
        const signToadd = path.indexOf('?') > -1 ? '&' : '?';
        this.iframeSRC = `${path + signToadd}webAppIframe=true&lang=${this.browserLang}`;
        this.loaderService.show();
        setTimeout(() => this.loaderService.hide(), 3000);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        sessionStorage.removeItem(SettingsIframeComponent.BASE_URL_KEY);
    }

  }

@NgModule({
  declarations: [
    SettingsIframeComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    PepNgxLibModule
  ],
  exports: [SettingsIframeComponent]
})
export class SettingsIframeModule {
}


