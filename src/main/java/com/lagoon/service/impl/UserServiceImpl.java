package com.lagoon.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lagoon.dao.UserDao;
import com.lagoon.model.User;
import com.lagoon.service.UserService;
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDao userDao;
    
    @Override
    public List<User> findAllUsers() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public User findAll(String userName) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public User save(User user) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public User findByUserName(String username) {
        return userDao.findByUserName(username);
    }

}
