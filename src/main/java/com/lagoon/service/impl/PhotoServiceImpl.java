package com.lagoon.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lagoon.dao.PhotoDao;
import com.lagoon.model.Photo;
import com.lagoon.model.User;
import com.lagoon.service.PhotoService;
@Service
public class PhotoServiceImpl implements PhotoService{

    @Autowired
    private PhotoDao photoDao;
    
    @Override
    public Photo save(Photo photo) {
        return photoDao.save(photo);
    }

    @Override
    public List<Photo> findByUser(User user) {
        return photoDao.findByUser(user);
    }

    @Override
    public List<Photo> findAll() {
        return photoDao.findAll();
    }

    @Override
    public Photo findByPhotoId(Long photoId) {
        // TODO Auto-generated method stub
        return null;
    }

}
