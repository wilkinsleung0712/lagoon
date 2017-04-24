/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Injectable} from '@angular/core';
import {Photo} from '../model/photo';
import {Http, Headers, Response} from '@angular/http';
import {stringify} from 'querystring';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import 'rxjs/Rx';
@Injectable()
export class PhotoService {

  private photo_url = 'http://localhost:8080/api/photos';
  private photo_crud_url = 'http://localhost:8080/api/photo';
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

  addPhoto(photo: Photo): Observable<Photo> {
    return this.http.post(this.photo_url + '/add', JSON.stringify(photo), stringify({'headers': this.headers}))
      .map(this.extraData)
      .catch(this.handleError);
  }

  deletePhoto(photo: Photo): Promise<null> {
    return this.http.delete(`${this.photo_crud_url}/${photo.photoId}`).toPromise().then(() => null).catch(this.handleError);
  }

  getPhoto(photoId: number): Observable<Photo> {
    return this.http.get(`${this.photo_crud_url}` + '/' + photoId)
      .map(this.extraData)
      .catch(this.handleError);
  }

  getPhotoByUser(user: User): Observable<Photo[]> {
    // get photo by providing user object
    return this.http.post(`${this.photo_url}` + '/user', JSON.stringify(user), {headers: this.headers}).map(this.extraData);
  }

  private extraData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
