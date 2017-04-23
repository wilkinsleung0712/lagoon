/**
 * Created by wilkins.liang on 21/04/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {PhotoService} from './services/photo.service';
import {Photo} from './model/photo';
import {UserService} from './services/user.service';
@Component({
  selector: 'my-album',
  templateUrl: 'my.album.component.html'
})
export class MyAlbumComponent implements OnInit {

  private photos: Photo[];

  constructor(private http: Http, private photoService: PhotoService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUserByUserName(localStorage.getItem('currentUserName')).subscribe(
      user => {
        this.photoService.getPhotoByUser(user).subscribe(
          photos => {
            this.photos = photos;
          }
        );
      }
    );
  }
}
