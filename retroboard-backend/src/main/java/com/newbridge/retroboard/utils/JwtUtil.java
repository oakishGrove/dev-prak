package com.newbridge.retroboard.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
public class JwtUtil {

    private static final String SECRET_KEY = "secret";
    private final Algorithm algorithm;
    private final JWTVerifier verifier;

    public JwtUtil () {
        this.algorithm = Algorithm.HMAC512(SECRET_KEY);
        this.verifier = JWT
                .require(algorithm)
                .build();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final DecodedJWT decodedJWT;
        final String username;
        decodedJWT = verifier.verify(token);
        username = decodedJWT.getIssuer();

        return (userDetails.getUsername().contentEquals(username));
    }

    public String extractUsername(String token) {
        return JWT.decode(token).getIssuer();
    }

    public String generateToken(String subject) {
        return JWT.create()
                .withIssuer(subject)
                .withIssuedAt(new Date(System.currentTimeMillis()))
                .withExpiresAt(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .sign(this.algorithm);
    }
}
