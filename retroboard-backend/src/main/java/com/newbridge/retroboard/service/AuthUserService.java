package com.newbridge.retroboard.service;

import com.newbridge.retroboard.dao.entities.AuthUser;

import java.util.List;

public interface AuthUserService {
    AuthUser getUserByUserName(String userName);
    void addAuthUser(AuthUser authUser);
    void updateAuthUser(AuthUser authUser);
    void deleteUserByUserName(String userName);
    boolean isAuthUserExistByUserName(String userName);
    List<AuthUser> getAll();
}
