// import { viewFlagDictionary } from './../../../../../server-side/dictionary';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { singleSpaPropsSubject } from "src/single-spa/single-spa-props";
import { Subscription } from "rxjs";
// import { AddonService } from './addon.service';
// import { TranslateService } from "@ngx-translate/core";
import {
    // PepLayoutService, PepScreenSizeType,
    PepHttpService, PepCookieService, PepSessionService } from '@pepperi-addons/ngx-lib';
// import { iframeDictionary } from '../../../../../server-side/dictionary';

import jwt from 'jwt-decode';

export enum USER_ROLE {
    'Admin' = 1,
    'Rep' = 2,
    'Buyer' = 3,
    'VARAdmin' = 301
}

@Component({
  selector: 'pep-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.scss'],
  providers: [
    //   AddonService
    ]
})
export class AddonComponent implements OnInit {
    private readonly PEPPERI_TOKEN_COOKIE = 'PepperiUserSettings';
    subscription: Subscription;
    iframeData;
    addon = null;
    userRole;
    iframeDictionary = {};
    static LEGACY_SETTINGS_UUID = '354c5123-a7d0-4f52-8fce-3cf1ebc95314';



    constructor(
        // private service: AddonService,
        private http: PepHttpService,
        public routeParams: ActivatedRoute,
        public router: Router,
        private cookies: PepCookieService,
        private session:  PepSessionService
    ) {
        this.iframeDictionary['sales_dashboard'] = 'Views/Dashboards/OrdersDashboard.aspx';
    }

    async ngOnInit() {

        //this.userRole = JSON.parse(this.cookies.get(this.PEPPERI_TOKEN_COOKIE))?.values?.items?.userRole
        const accessToken = this.session.getIdpToken();
        const parsedToken = jwt(accessToken);
        this.userRole = USER_ROLE[parsedToken["pepperi.employeetype"]];            
        // singleSpaPropsSubject.subscribe(props => this.addon = props['addon']);
        const addonUUID = AddonComponent.LEGACY_SETTINGS_UUID;
        this.addon = await this.getAddon(addonUUID);
        this.subscription = this.routeParams.queryParams.subscribe( queryParams => {
            const view = queryParams?.view;

            this.getPath(view).then( path =>{
                const relativePath = path[0]?.Value ? path[0]?.Value : path;
                if (relativePath &&
                    (this.userRole === 'Admin' || this.userRole === 'VARAdmin') // HACK
                    ){
                    this.iframeData = { addon: this.addon, UUID: addonUUID,  top: 70, path: relativePath }
                }
            })
        });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    async getPath(viewKey: string): Promise<any> {
        return Promise.resolve(this.iframeDictionary[viewKey]);
    }

    async checkLicense(flag: string){
        return await this.http.getPapiApiCall(`/meta_data/flags/${flag}`).toPromise();
    }

    async getAddon(uuid: string){
        return await this.http.getPapiApiCall(`/addons/installed_addons/${uuid}`).toPromise();
    }

}
