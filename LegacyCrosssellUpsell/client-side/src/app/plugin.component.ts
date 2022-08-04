import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
// @ts-ignore
import {EnvVariables} from "pepperi-environment-variables";
// @ts-ignore
import {UserService} from "pepperi-user-service";
@Component({
  selector: "plugin",
  templateUrl: "./plugin.component.html",
  styleUrls: ["./plugin.component.scss"],
  providers: [],
  // To override parent component styling
  encapsulation: ViewEncapsulation.None
})
export class PluginComponent implements OnInit {

  backOfficeMainDomain = EnvVariables.BackOfficeMainDomain;
  iframeCookieVersionSrc;
  iframeSRC;
  tempSrc;

  constructor(
      private sanitizer: DomSanitizer,
      public userService: UserService
    ) {
  }

  ngOnInit() {
    this.userService.httpGetApiCall(
      `/addons/installed_addons/${"354c5123-a7d0-4f52-8fce-3cf1ebc95314"}`,
      (res: any) => {
        this.setIframeSRC(res.Version);
      },
      (res: any) => {
      },
      null,
      false,
      false
  );

  }
  setIframeSRC(legacySetVer: any) {
    const frameSrc = this.backOfficeMainDomain +  "cookieVersion.html?ver=" +  legacySetVer;
    this.iframeCookieVersionSrc = this.sanitizer.bypassSecurityTrustResourceUrl(frameSrc);
    this.tempSrc = this.backOfficeMainDomain + "Views/Agents/SpecialOffers.aspx" ;
    const signToadd = this.tempSrc.indexOf("?") > -1 ? "&" : "?";
    this.tempSrc += signToadd + "webAppIframe=true";
    setTimeout( () => this.iframeSRC = this.sanitizer.bypassSecurityTrustResourceUrl(this.tempSrc) , 50);
  }

    ngOnChanges(changes: any) {
  }

}
