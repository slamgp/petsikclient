import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


export class User {
  aouthToken: string;
  email: string;

  constructor(aouthToken: string, email: string) {
    this.aouthToken = aouthToken;
    this.email = email
  }
}

export class ServerProperty {
  public static serverLoginUrl = "http://localhost:8095/server/outh";
  public static serverRegistrationUrl = "http://localhost:8095/server/registration";
}

@Injectable()
export class LoginServiceService {
  private user_field = "user"

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string, succesCallback, failCallBack) {
    let data = {"username": email, "password": password};


    this.http.post(ServerProperty.serverLoginUrl, data).subscribe(data => {
      if ('true' == data['isAuthenticate']) {
        this.setAuthData(email, data['data']);
        succesCallback();
      } else {
        failCallBack();
        this.setAuthData(null, null)
      }
    });
  }

  registrate(email: string, password: string, succesCallback, failCallBack) {
    let data = {"username": email, "password": password};


    this.http.post(ServerProperty.serverRegistrationUrl, data).subscribe(data => {
      if ('true' == data['result']) {
        succesCallback();
      } else {
        failCallBack();
      }
    });
  }

  login1(email: string, password: string) {
    if (this.getAuthData() != null) {
        let headers = new HttpHeaders({"Authorization": this.getAuthData()});
        this.http.get("http://localhost:8095/server/rest", {headers: headers}).subscribe(data=>console.log(data));
    }
  }

  public logout() {
    localStorage.removeItem("userData");
  }

  getAuthData(): string {
    var json = JSON.parse(localStorage.getItem("userData"))
    if (json == null) {
      return null;
    }
    return json["aouthToken"];
  }

  getEmail(): string {
    var json = JSON.parse(localStorage.getItem("userData"))
    return json["email"];
  }

  setAuthData(email: string, data: string) {
    let user: User = new User(data, email);
    localStorage.setItem("userData", JSON.stringify(user));
  }

  public isAuthenticate(): boolean {
    if (localStorage.getItem("userData") == null) {
      return false;
    }
    return (this.getAuthData() != null);
  }


}
