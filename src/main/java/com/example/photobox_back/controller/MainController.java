package com.example.photobox_back.controller;

import com.example.photobox_back.beans.User;
import com.example.photobox_back.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/root")
@RequiredArgsConstructor
public class MainController {
    private final UserService userService;

    @PostMapping("/join")
    public boolean join(@RequestBody User user) {
        userService.addUser(user);
        return true;
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User DBUser = userService.getOneUser(user);
        DBUser.setUser_login(true);
        return DBUser;
    }

    @PostMapping("/mypage")
    public User myPage(@RequestBody User user) {
        userService.modifyUser(user);
        return user;
    }
}
