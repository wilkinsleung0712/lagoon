package com.lagoon.service;

import java.util.List;

import com.lagoon.model.User;

public interface UserService {
    List<User> findAllUsers();

    User findAll(String userName);

    User save(User user);
}
