/**
 * Created by wilkins.liang on 24/04/2017.
 */
import {Injectable} from '@angular/core';
import {Photo} from '../model/photo';
@Injectable()
export class UploadPhotoService {

  private photo_url = 'http://localhost:8080/api/photo';

  fileToUpload: Array<File>;

  constructor() {
    this.fileToUpload = [];
  }

  upload(newPhoto: Photo): void {
    this.makeFileRequest(this.photo_url, [], this.fileToUpload);
  }

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>): Promise<any> {
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      Array.from(files).forEach(file => {
        formData.append('uploads[]', file, file.name);
      });



      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert('Upload successful!');
          } else {
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
