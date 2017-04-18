package com.lagoon.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lagoon.model.Photo;
import com.lagoon.model.User;


public interface PhotoService {

    public Photo save(Photo photo);

    public List<Photo> findByUser(User user);

    public List<Photo> findAll();

    public Photo findByPhotoId(Long photoId);
}
