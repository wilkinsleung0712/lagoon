package com.lagoon.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lagoon.model.User;

@Repository
public interface UserDao extends CrudRepository<User, Long> {
    
    public User findByUserId(Long userId);

    public List<User> findAll();

    public User findByUserName(String username);

    @SuppressWarnings("unchecked")
    public User save(User user);
}
