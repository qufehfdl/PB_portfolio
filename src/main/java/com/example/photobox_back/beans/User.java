package com.example.photobox_back.beans;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private int no;
    //@Size(min = 2, max = 15)
    //@Pattern(regexp = "[가-힣]*")
    private String user_name;
    //@Size(min = 4, max = 20)
    //@Pattern(regexp = "[a-zA-Z0-9]*")
    private String user_id;
    //@Size(min = 4, max = 20)
    //@Pattern(regexp = "[a-zA-Z0-9]*")
    private String user_password;
    private String user_email;

    private boolean user_login;
    private boolean join_check;
    public User() {
        this.user_login = false;
        this.join_check = false;
    }
}