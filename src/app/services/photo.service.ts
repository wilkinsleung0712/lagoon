/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Injectable} from '@angular/core';
import {Photo} from '../model/photo';
import {Http} from '@angular/http';
import {stringify} from 'querystring';
@Injectable()
export class PhotoService {

  private photo_url = 'api/photos';
  private photo_crud_url = 'api/photo';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getPhotos(): Promise<Photo[]> {
    return this.http.get(this.photo_url).toPromise().then(response => response.json().data as Photo[])
      .catch(this.handleError);
  }

  editPhoto(photo: Photo): Promise<Photo> {
    return this.http.put(`${this.photo_crud_url}/${photo.photoId}`, JSON.stringify(photo))
      .toPromise()
      .then(() => photo);
  }

  addPhoto(photo: Photo): Promise<Photo> {
    return this.http.post(this.photo_url, JSON.stringify(photo), stringify({'headers': this.headers}))
      .toPromise()
      .then(res => res.json().data as Photo)
      .catch(this.handleError);
  }

  deletePhoto(photo: Photo): Promise<null> {
    return this.http.delete(`${this.photo_crud_url}/${photo.photoId}`).toPromise().then(() => null).catch(this.handleError);
  }

  getPhoto(photoId: number): Promise<Photo> {
    return this.http.get(`${this.photo_crud_url}/${photoId}`).toPromise().then(res => res.json().data as Photo).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
