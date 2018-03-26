import {Component, OnInit, ElementRef} from '@angular/core';
import {LoginServiceService} from "../../service/login-service.service";
import {ViewChild} from "@angular/core";

declare var Materialize:any;
declare let $: any;

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  providers: [LoginServiceService]
})
export class MyProfileComponent implements OnInit {
  private isAuthentikate:boolean;
  private loginService:LoginServiceService;

  private email:string;
  private name:string;
  private phone:string;
  private password:string;
  private newPassword:string;
  private repeatPassword:string;



  constructor(loginService: LoginServiceService) {
    this.loginService = loginService;
  }

  ngOnInit() {
    this.isAuthentikate = this.loginService.isAuthenticate();
    if (this.isAuthentikate) {
      this.loginService.getProfileData((data:Object)=>(this.fillProfile(data)));

    }
  }

  private fillProfile(data: Object) {
    this.email = data['email'];
    this.phone = data['phone'];
    this.name = data['name'];
    Materialize.updateTextFields();
  }

  sentProfileMainData() {
    this.loginService.sentProfileMainData(this.email, this.phone, this.name);
  }


}
