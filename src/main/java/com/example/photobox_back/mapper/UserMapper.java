package com.example.photobox_back.mapper;

import com.example.photobox_back.beans.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
@Mapper
public interface UserMapper {
    // 회원가입
    @Insert("insert into User(user_name , user_id , user_password , user_email) values(#{user_name},#{user_id},#{user_password},#{user_email})")
    public void addUser(User user);

    // 로그인 : 한 유저의 정보 가져오기
    @Select("select no , user_id , user_name from User where user_id = #{user_id} and user_password = #{user_password}")
    public User getOneUser(User user);

    // 정보 수정
    @Update("update User set user_name = #{user_name} , user_password = #{user_password} where user_id= #{user_id}")
    public void modifyUser(User user);
}
