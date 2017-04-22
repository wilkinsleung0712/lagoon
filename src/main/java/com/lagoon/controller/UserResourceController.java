package com.lagoon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lagoon.common.ExceptionUtils;
import com.lagoon.common.LagoonResult;
import com.lagoon.model.User;
import com.lagoon.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserResourceController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/username", method = RequestMethod.POST)
    public LagoonResult getUserByName(@RequestBody String username) {
        LagoonResult result = null;
        try {
            if (username != null && !username.trim().isEmpty()) {
                User user = this.userService.findByUserName(username);
                if (user != null) {
                    user.setPassword(null);
                }
                result = LagoonResult.ok(user);
            } else {
                result = new LagoonResult(400, "missing user data:[" + username.toString() + "]", null);
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            result = new LagoonResult(500, ExceptionUtils.getStackTrace(e), null);
        }
        return result;
    }
}
