package com.lagoon.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lagoon.common.LagoonResult;
import com.lagoon.model.User;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public LagoonResult login(@RequestBody User user) {
        System.out.println(user);
        return LagoonResult.ok();
    }
}
