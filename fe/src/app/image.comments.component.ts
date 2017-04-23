/**
 * Created by WEIQIANG LIANG on 23/04/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Photo} from './model/photo';
import {User} from './model/user';
import {UserService} from './services/user.service';
import {PhotoService} from './services/photo.service';

@Component({
  selector: 'image-comments',
  templateUrl: 'image.comments.component.html'
})
export class ImageCommentsComponent implements OnInit {
  @Input() photo: Photo;
  user: User;

  constructor(private userService: UserService,
              private photoService: PhotoService) {
    console.log(this.photo);
  }

  ngOnInit(): void {
    this.userService.getUserByUserName(this.userService.getCurrentUserName()).subscribe(
      user => this.user = user
    );
  }
}

