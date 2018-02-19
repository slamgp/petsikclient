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
  public static serverUrl = "http://localhost:8095/server/outh";
}

@Injectable()
export class LoginServiceService {
  private user_field = "user"

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string, callback) {
    let data = {"username": email, "password": password};


    this.http.post(ServerProperty.serverUrl, data).subscribe(data => {
      if ('true' == data['isAuthenticate']) {
        this.setAuthData(email, data['data']);
        callback();
      } else {
        this.setAuthData(null, null)
      }
    });
  }

  login1(email: string, password: string) {
    if (this.getAuthData() != null) {
        let headers = new HttpHeaders({"Authorization": this.getAuthData()});
        this.http.get("http://localhost:8095/server/rest", {headers: headers}).subscribe(data=>console.log(data));
    }
  }

  logout(email: string) {
    localStorage.removeItem(email);
  }

  getAuthData(): string {
    var json = JSON.parse(localStorage.getItem("userData"))
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
    var json = JSON.parse(localStorage.getItem("userData"))
    return (this.getAuthData() != null);
  }

}
