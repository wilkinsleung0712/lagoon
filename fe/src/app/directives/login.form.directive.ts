import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
/**
 * Created by wilkins.liang on 13/04/2017.
 */
@Component({
  selector: 'login-form',
  providers:[LoginService],
  templateUrl: 'login.form.directive.html'
})
export class LoginFormDirectiveComponent {

  constructor(private loginService: LoginService, private router: Router) {
  }

  userLogin(loginForm: NgForm) {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    this.loginService.userLogin(username, password).then(response => {
      if (response) {
        localStorage.setItem('currentUserName', username);
        this.router.navigateByUrl('/Home');
      } else {
        console.log(username + ' [user] not exist..');
      }
    }, error => {
      console.log(error);
    });
  }

}
