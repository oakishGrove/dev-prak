package com.newbridge.retroboard.service.serviceimpl;

import com.newbridge.retroboard.dao.AuthUserDao;
import com.newbridge.retroboard.dao.entities.AuthUser;
import com.newbridge.retroboard.exceptionhandler.exceptions.FailedAuthenticationException;
import com.newbridge.retroboard.service.AuthUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthUserServiceImpl implements AuthUserService {

    private final AuthUserDao dao;


    @Override
    public AuthUser getUserByUserName(String userName) {
        return dao
                .findByUsername(userName)
                .orElseThrow(() -> new FailedAuthenticationException("User doesn't exist"));
    }

    @Override
    public void addAuthUser(AuthUser authUser) {
        dao.save(authUser);
    }

    @Override
    public void updateAuthUser(AuthUser authUser) {
        if (dao.existsById(authUser.getId())) {
            dao.save(authUser);
        }
    }

    @Override
    public void deleteUserByUserName(String userName) {
        dao.deleteByUsername(userName);
    }

    @Override
    public boolean isAuthUserExistByUserName(String userName) {
        return dao.existsByUsername(userName);
    }

    @Override
    public List<AuthUser> getAll() {
        return dao.findAll();
    }
}
