package com.lagoon.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lagoon.model.Comment;

@Repository
public interface CommentDao extends CrudRepository<Comment, Long> {

    @SuppressWarnings("unchecked")
    public Comment save(Comment comment);

    public Comment findOne(Long commentId);

    public List<Comment> findByPhotoId(Long photoId);
}
