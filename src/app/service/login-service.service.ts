import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {ResponseContentType, RequestOptions} from "@angular/http";
import {HttpRequest} from "@angular/common/http";


export class User {
  email: string;
  password: string;
  constructor (email : string, pass : string ) {
    this.email = email;
    this.password = pass
  }
}

export class ServerProperty {
  public static serverUrl = "http://localhost:8095/server/outh";
}

@Injectable()
export class LoginServiceService {
  private user_field = "user"
  private token;
  constructor(private http : HttpClient ) { }

  login (email: string, password: string)
  {
    let data = {"username": email, "password": password};


    this.http.post(ServerProperty.serverUrl, data).subscribe(data =>this.token = data['data']);

    localStorage.setItem("token", this.token);

  }

  login1 (email: string, password: string)
  {
    let headers = new HttpHeaders({"Authorization" : this.token});

    this.http.get("http://localhost:8095/server/rest", {headers : headers}).subscribe(data=>console.log(data));

  }

  logout (email: string) {
    localStorage.removeItem(email);
  }
}
