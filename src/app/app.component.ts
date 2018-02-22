import {ViewChild, Component, ElementRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MatSelect} from "@angular/material";
import {LoginServiceService} from "./service/login-service.service";
import {LoginComponent} from "./component/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginServiceService]
})

export class AppComponent {
  @ViewChild('loginLogautBtn') loginLogautBtn: ElementRef;
  @ViewChild('select') select: MatSelect;
  @ViewChild('loginComponent') loginComponent: LoginComponent;
  //securStatus: string = "account_circle"

  constructor(private translate: TranslateService, private loginService: LoginServiceService) {
    this.translate.addLangs(['uk','en']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.select.value =   this.translate.getDefaultLang();
  }

  switchLanguage(lang) {
    this.translate.use(lang);
  }


  login1() {
    this.loginService.login1("111@gmail.com", "111");
  }

  loginOnClick() {
    if (this.loginService.isAuthenticate()) {
      this.loginService.logout();
    } else {
      this.loginLogautBtn.nativeElement.click();
    }
    this.loginComponent.reset();
  }


  getsecurStatus(): string {
    if (this.loginService.isAuthenticate()) {
      return "close";
    } else {
      return "account_circle";
    }

  }

}
