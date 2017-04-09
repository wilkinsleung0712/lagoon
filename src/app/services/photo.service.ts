/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Injectable} from "@angular/core";
import {Photo} from "../model/photo";
import {Http} from "@angular/http";
@Injectable()
export class PhotoService {

  private photo_url: string = 'api/photos';

  constructor(private http: Http) {
  }

  getPhotos(): Promise<Photo[]> {
    return this.http.get(this.photo_url).toPromise().then(response => response.json().data as Photo[]).catch(this.handleError);;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
