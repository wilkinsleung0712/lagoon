/**
 * Created by wilkins.liang on 19/04/2017.
 */
import {Component} from '@angular/core';
import {Photo} from '../model/photo';
import {PhotoService} from '../services/photo.service';
import {UploadPhotoService} from '../services/upload.photot.service';
@Component({
  selector: 'add-photo',
  templateUrl: 'add.photo.component.html'
})
export class AddPhotoComponent {

  newPhoto: Photo = new Photo();

  constructor(private uploadPhotoService: UploadPhotoService,
  private photoService:PhotoService) {

  }

  onSubmit(): void {
    this.photoService.addPhoto(this.newPhoto).subscribe(
      response => {
        console.log(response);
      }
    );
    console.log(this.newPhoto);
  }
}
