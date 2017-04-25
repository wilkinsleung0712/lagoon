/**
 * Created by wilkins.liang on 11/04/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {PhotoService} from './services/photo.service';
import {Photo} from './model/photo';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'photo-detail',
  templateUrl: 'photo.detail.component.html'
})
export class PhotoDetailComponent implements OnInit {

  photo: Photo = new Photo();

  constructor(private photoService: PhotoService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    console.log('on init');
    // If a user re-navigates to this component while a getHero request is still processing,
    // switchMap cancels the old request and then calls HeroService.getHero() again.
    this.route.params.switchMap(
      (params: Params) => this.photoService.getPhoto(params['photoId']))
      .subscribe((photo: Photo) => {
        this.photo = photo;
      });
  }
}
