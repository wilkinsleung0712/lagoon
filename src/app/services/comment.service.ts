/**
 * Created by weiqiangliang on 14/4/17.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
@Injectable()
export class CommentService {

  private comment_url = 'api/comments';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  addComment(comment: Comment): Promise<Comment> {
    return this.http.post(this.comment_url, comment, this.headers)
      .toPromise().then(response => this.extractData(response)).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
