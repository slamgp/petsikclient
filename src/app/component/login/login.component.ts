import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {LoginServiceService} from "../../service/login-service.service";
import {ViewChild} from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('closeButton') closeButton: ElementRef;
  loginEmail = "";
  loginPassword = "";
  loginFale: boolean = false;
  registrationFale: boolean = false;
  registrationEmail = "";
  registrationPassword = "";
  registrationPasswordRepeat = "";

  constructor(private servise: LoginServiceService) { }

  ngOnInit() {
    this.loginFale = false;
  }

  sentAuthenticateRequest() {
    this.loginFale = false;
    this.servise.login(this.loginEmail, this.loginPassword, (() => this.closeLoginForm()), (() => this.setLoginFale()));
  }

  sentRegistrationRequest() {
    this.loginFale = false;
    this.servise.registrate(this.registrationEmail, this.registrationPassword, (() => this.closeLoginForm()), (() => this.setRegistrationFale()));
  }

  closeLoginForm() {
      this.closeButton.nativeElement.click();
  }

  setLoginFale() {
    this.loginFale = true;
  }

  setRegistrationFale() {
    this.registrationFale = true;
  }

  public  reset() {
    this.loginFale = false;
  }
}
