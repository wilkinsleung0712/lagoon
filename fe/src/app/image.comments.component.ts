/**
 * Created by WEIQIANG LIANG on 23/04/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Photo} from './model/photo';
import {User} from './model/user';
import {UserService} from './services/user.service';
import {Comment} from './model/comment';
import {CommentService} from './services/comment.service';

@Component({
  selector: 'image-comments',
  templateUrl: 'image.comments.component.html'
})
export class ImageCommentsComponent implements OnInit {
  @Input() photo: Photo = new Photo();
  user: User;
  newComment: Comment = new Comment();

  constructor(private userService: UserService,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.userService.getUserByUserName(this.userService.getCurrentUserName()).subscribe(
      user => this.user = user
    );
  }

  onSubmit(): void {
    console.log(this.photo);
    console.log(this.user);
    console.log(this.newComment);
    this.newComment.photo = this.photo;
    this.newComment.userName = this.user.userName;
    this.newComment.photoId = this.photo.photoId;
    if (this.newComment.photoId) {
      this.commentService.addComment(this.newComment).then(
        newComment => {
          this.photo.commentList.push(newComment);
          console.log(this.photo.commentList);
        }
      );
      this.newComment = new Comment();
    }
  }
}

