package com.lagoon.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lagoon.model.Photo;
import com.lagoon.model.User;

@Repository
public interface PhotoDao extends CrudRepository<Photo, Long> {
    
    @SuppressWarnings("unchecked")
    public Photo save(Photo photo);

    public List<Photo> findByUser(User user);

    public List<Photo> findAll();

    public Photo findByPhotoId(Long photoId);
}
