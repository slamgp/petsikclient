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
  public static serverUrl = "http://localhost:8095/server/login";
}

@Injectable()
export class LoginServiceService {
  private user_field = "user";
  constructor(private http : HttpClient ) { }

  login (email: string, password: string)
  {
    let data = {"username": email, "password": password, "submit": "Login"};

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post(ServerProperty.serverUrl, data, {headers: headers}).subscribe(data=>console.log(data));

    localStorage.setItem(this.user_field, email);
  }

  login1 (email: string, password: string)
  {
   // let data = JSON.stringify({"name": "kaban"});
    let headers = new HttpHeaders({'Content-Type': 'text/plain', 'Authorization':'Basic MTExQGdtYWlsLmNvbToxMTE='});

    //this.http.post("http://localhost:8095/server/hello", data, {headers: headers}).subscribe(data=>console.log(data));

    this.http.get("http://localhost:8095/server/rest", {headers:headers}).subscribe(data=>console.log(data));


  }

  logout (email: string) {
    localStorage.removeItem(email);
  }
}
