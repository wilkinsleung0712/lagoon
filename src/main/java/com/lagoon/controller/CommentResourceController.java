package com.lagoon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lagoon.common.ExceptionUtils;
import com.lagoon.common.LagoonResult;
import com.lagoon.model.Comment;
import com.lagoon.model.Photo;
import com.lagoon.service.CommentService;
import com.lagoon.service.PhotoService;

@RestController
@RequestMapping("/api/comments")
public class CommentResourceController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private PhotoService photoService;
    
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public LagoonResult addComment(@RequestBody Comment newComment) {
        LagoonResult result = null;
        try {
            Long photoId = newComment.getPhotoId();
            if ( photoId.intValue()> 0) {
                Photo photo = photoService.findByPhotoId(photoId);
                newComment.setPhoto(photo);
                Comment comment = this.commentService.save(newComment);
                result = LagoonResult.ok(comment);
            } else {
                result = new LagoonResult(400, "photo not found", null);
            }
            
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            result = new LagoonResult(500, ExceptionUtils.getStackTrace(e), null);
        }
        return result;
    }
}
