import { ViewChild, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MatSelect} from "@angular/material";
import {LoginServiceService} from "./service/login-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginServiceService]
})

export class AppComponent {
  @ViewChild('select') select: MatSelect;

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

}
