/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

  private user_url = 'api/users';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  userRegister(user: User): Observable<User> {
    return this.http.post(this.user_url, JSON.stringify(user), this.headers).map(this.extractData);
  }

  updateUser(user: User): Promise<User> {
    return this.http.put(this.user_url, user).toPromise().then(this.extractData);
  }

  getCurrentUserName(): String {
    const currentUserName: String = localStorage.getItem('currentUserName');
    return currentUserName ? currentUserName : '';
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
