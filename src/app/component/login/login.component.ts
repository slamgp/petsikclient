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
  email = "";
  password = "";


  constructor(private servise: LoginServiceService) { }

  ngOnInit() {
  }

  sentAuthenticateRequest() {
    this.servise.login(this.email, this.password, (() => this.closeLoginForm()));
  }

  closeLoginForm() {
      this.closeButton.nativeElement.click();
  }
}
