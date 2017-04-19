/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Component} from '@angular/core';
import {LoginService} from './services/login.service';
@Component({
  selector: 'nav-bar',
  providers: [LoginService],
  templateUrl: 'nav.bar.component.html'
})
export class NavBarComponent {

  constructor(private loginService: LoginService) {
  }
}
