/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Component, OnInit} from "@angular/core";
import {PhotoService} from "./services/photo.service";
import {Photo} from "./model/photo";
@Component({
  selector: 'photo-list',
  templateUrl: 'photo.list.component.html',
  styleUrls: ['photo.list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[]=[];

  constructor(private photoService: PhotoService) {
  }

  getPhotos(): void {
    this.photoService.getPhotos().then(photoList => this.photos = photoList);
  }

  ngOnInit(): void {
    this.getPhotos();
  }

}
