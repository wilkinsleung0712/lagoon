/**
 * Created by weiqiangliang on 9/4/17.
 */
import {Photo} from "./photo";
export class Comment {
  public commentId:number;
  public content:string;
  public photo:Photo;
  public userName:string;
  public photoId:number;
  public created:Date;
}
