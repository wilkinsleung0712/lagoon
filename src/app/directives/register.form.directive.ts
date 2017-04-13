/**
 * Created by wilkins.liang on 13/04/2017.
 */
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from 'app/services/user.service';
@Component({
  selector: 'register-form',
  templateUrl: 'register.form.directive.html'
})
export class RegisterFormDirectiveComponent {

  constructor(private userService: UserService,
              private http: Http, private router: Router) {

  }


  userRegister(registerForm: NgForm) {
    this.userService.userRegister(registerForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
