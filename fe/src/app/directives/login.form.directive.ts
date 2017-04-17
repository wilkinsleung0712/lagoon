import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
/**
 * Created by wilkins.liang on 13/04/2017.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login.form.directive.html'
})
export class LoginFormDirectiveComponent {

  constructor(private userService: UserService, private router: Router) {
  }

  userLogin(loginForm: NgForm) {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    this.userService.userLogin(username, password).then(response => {
      if (response) {
        this.router.navigateByUrl('/Home');
      } else {
        console.log(username + ' [user] not exist..');
      }
    }, error => {
      console.log(error);
    });
  }

}
