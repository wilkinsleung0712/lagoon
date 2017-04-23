/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Photo} from './photo';

export class User {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public password: string;
  public created: Date;
  public photoList: Photo[];
  public linkedPhotoList: Photo[];
  public userName: string;


  constructor(userId: number, firstName: string, lastName: string, password: string, userName?: string) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.photoList = [];
    this.linkedPhotoList = [];
    this.userName = (userName) ? userName : firstName + '.' + lastName;
  }

  public addPhoto(photo: Photo): void {
    this.photoList.push(photo);
  }
}
