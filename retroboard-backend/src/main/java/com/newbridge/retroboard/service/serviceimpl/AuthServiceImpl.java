package com.newbridge.retroboard.service.serviceimpl;

import com.newbridge.retroboard.controllers.securityconfig.CustomUserDetails;
import com.newbridge.retroboard.dao.entities.AuthRole;
import com.newbridge.retroboard.dao.entities.AuthUser;
import com.newbridge.retroboard.dto.AuthenticationRequest;
import com.newbridge.retroboard.dto.AuthenticationResponse;
import com.newbridge.retroboard.dto.UserTao;
import com.newbridge.retroboard.exceptionhandler.exceptions.FailedAuthenticationException;
import com.newbridge.retroboard.service.AuthService;
import com.newbridge.retroboard.service.AuthUserService;
import com.newbridge.retroboard.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final JwtUtil jwtUtil;
    private final AuthUserService authUserService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse authenticate(AuthenticationRequest authReq) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authReq.getUsername(), authReq.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new FailedAuthenticationException("Incorrect user name or password");
        }
        return createAuthToken(authReq.getUsername());
    }

    public List<String> getAuthorities (String jwtToken) {
        String user = jwtUtil.extractUsername(jwtToken.split(" ")[1]);
        return authUserService
                .getUserByUserName(user)
                .getAuthRoles()
                .stream()
                .map(AuthRole::getRole)
                .collect(Collectors.toList());
    }

    private AuthenticationResponse createAuthToken(String username) {

        AuthUser user = authUserService.getUserByUserName(username);
        CustomUserDetails userDetails = new CustomUserDetails(user);
        String subject = userDetails.getUsername();
        final String jwtToken = jwtUtil.generateToken(subject);

        UserTao userTao = new UserTao();
        userTao.setName(user.getName());
        userTao.setGrantedAuthority(
                userDetails
                        .getAuthorities()
                        .stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList())
        );
        return new AuthenticationResponse(jwtToken, userTao);
    }
}
