/**
 * Created by weiqiangliang on 9/4/17.
 */

import {User} from './user';
import {Comment} from './comment';

export class Photo {
  public photoId: number;
  public photoName: string;
  public imageName: string;
  public title: string;
  public description: string;
  public user: User;
  public likes: number;
  public likedByUsers: User[];
  public commentList: Comment[];
  public created: Date;

  constructor(photoId: number, photoName: string, imageName: string, title: string, description: string) {
    this.photoId = photoId;
    this.photoName = photoName;
    this.imageName = imageName;
    this.title = title;
    this.description = description;
  }

  public setUser(user: User): void {
    this.user = user;
  }
}
