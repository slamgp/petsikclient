import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatSelectModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { SidePanelComponent } from './component/side-panel/side-panel.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { PetsDateComponent } from './component/pets-date/pets-date.component';
import { PetsServiceComponent } from './component/pets-service/pets-service.component';
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component:  MyProfileComponent},
  {path: 'date', component:  PetsDateComponent},
  {path: 'service', component:  PetsServiceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    MyProfileComponent,
    PetsDateComponent,
    PetsServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatSelectModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
