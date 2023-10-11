package com.example.photobox_back.dao;

import com.example.photobox_back.beans.User;
import com.example.photobox_back.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserDAO {
    private final UserMapper userMapper;

    public void addUser(User user) {
        userMapper.addUser(user);
    }

    public User getOneUser(User user) {
        return userMapper.getOneUser(user);
    }

    public void modifyUser(User user) {
        userMapper.modifyUser(user);
    }
}
