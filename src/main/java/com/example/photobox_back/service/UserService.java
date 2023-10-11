package com.example.photobox_back.service;

import com.example.photobox_back.beans.User;
import com.example.photobox_back.dao.UserDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserDAO userDAO;

    public void addUser(User user) {
        userDAO.addUser(user);
    }

    public User getOneUser(User user) {
        User DBUser = userDAO.getOneUser(user);
        return DBUser;
    }

    public void modifyUser(User user) {
        userDAO.modifyUser(user);
    }
}
