import { ViewChild, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MatSelect} from "@angular/material";
import {Logs} from "selenium-webdriver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('select') select: MatSelect;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['uk','en']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.select.value =   this.translate.getDefaultLang();
  }

  switchLanguage(lang) {
    this.translate.use(lang);
  }
}
