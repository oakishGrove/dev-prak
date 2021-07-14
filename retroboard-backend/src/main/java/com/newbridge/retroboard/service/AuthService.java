package com.newbridge.retroboard.service;

import com.newbridge.retroboard.dto.AuthenticationRequest;
import com.newbridge.retroboard.dto.AuthenticationResponse;

import java.util.List;

public interface AuthService {

    AuthenticationResponse authenticate(AuthenticationRequest authReq);
    List<String> getAuthorities (String jwtToken);
}
