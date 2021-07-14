package com.newbridge.retroboard.dto;

import lombok.Data;

@Data
public class AuthenticationRequest {
    String username;
    String password;
}
