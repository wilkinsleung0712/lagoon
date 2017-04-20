package com.lagoon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lagoon.common.ExceptionUtils;
import com.lagoon.common.LagoonResult;
import com.lagoon.model.Photo;
import com.lagoon.model.User;
import com.lagoon.service.PhotoService;

@RestController
@RequestMapping("/api")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @RequestMapping(value = "/photos", method = RequestMethod.GET)
    public LagoonResult getAllPhotos() {
        LagoonResult result = null;
        try {
            List<Photo> photoList = this.photoService.findAll();
            result = new LagoonResult(photoList);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            result = new LagoonResult(500, ExceptionUtils.getStackTrace(e), null);
        }
        return result;
    }

    @RequestMapping(value = "/photo/{id}", method = RequestMethod.GET)
    public LagoonResult getPhoto(@PathVariable Long photoId) {
        LagoonResult result = null;
        try {
            Photo photo = this.photoService.findByPhotoId(photoId);
            result = LagoonResult.ok(photo);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            result = new LagoonResult(500, ExceptionUtils.getStackTrace(e), null);
        }
        return result;
    }


    @RequestMapping(value="/photo/user",method = RequestMethod.POST)
    public LagoonResult getPhotoByUserName (@RequestBody User user){
        LagoonResult result = null;
        try {
            List<Photo> photo = this.photoService.findByUser(user);
            result = LagoonResult.ok(photo);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            result = new LagoonResult(500, ExceptionUtils.getStackTrace(e), null);
        }
        return result;
    }

   
}
