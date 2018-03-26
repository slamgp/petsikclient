import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../service/login-service.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  private isAuthentikate:boolean;
  private loginService:LoginServiceService;

  constructor(loginService: LoginServiceService) {
    this.loginService = loginService;
  }

  ngOnInit() {
    this.isAuthentikate = this.loginService.isAuthenticate();
  }

}
