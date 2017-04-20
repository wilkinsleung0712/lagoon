/**
 * Created by wilkins.liang on 19/04/2017.
 */
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {User} from '../model/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  // private login_uri = 'api/user/login';
  private login_uri = 'http://localhost:8080/api/user/login';
  private model = {'username': '', 'password': ''};
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }


  userLogin(username: string, password: string): Promise<boolean> {
    this.model.username = username;
    this.model.password = password;

    return this.http.post(`${this.login_uri}`, JSON.stringify(this.model), {headers: this.headers})
      .toPromise()
      .then(response => {
        if (response.status === 200) {
          const existUser: User = this.extractData(response);
          // if (isObject(existUser)) {
          //   existUser = <User>existUser;
          // }
          // if (existUser.password === password && existUser.userName === username) {
            return true;
          // }
        }
        return false;
      }).catch(this.handleError);
  }

  checkLogin(): boolean {
    return localStorage.getItem('currentUserName') ? true : false;
  }

  logout() {
    localStorage.clear();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
