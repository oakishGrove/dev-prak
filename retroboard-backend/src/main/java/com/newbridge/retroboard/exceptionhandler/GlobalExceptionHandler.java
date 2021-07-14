package com.newbridge.retroboard.exceptionhandler;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.newbridge.retroboard.exceptionhandler.exceptions.FailedAuthenticationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private ResponseEntity<ErrorDetails> getResponseEntity(String message, Exception ex, int httpStatus) {
        ErrorDetails err = new ErrorDetails();
        err.setErrorCode(httpStatus);
        err.setTimeStamp(new Date());
        err.setErrorMessage(message);
        
        if (ex != null) {
            err.setExceptionCause(ex.getCause().toString());
        }

        return ResponseEntity.status(httpStatus).body(err);
    }

    @ExceptionHandler(FailedAuthenticationException.class)
    public ResponseEntity<ErrorDetails> failedAuthentication(FailedAuthenticationException ex) {
        return getResponseEntity(ex.getMessage(), null, 401);
    }

    @ExceptionHandler(TokenExpiredException.class)
    public ResponseEntity<ErrorDetails> tokenExpired(TokenExpiredException ex) {
        return getResponseEntity("token expired", null, 401);
    }
    @ExceptionHandler(JWTVerificationException.class)
    public ResponseEntity<ErrorDetails> tokenExpired(JWTVerificationException ex) {
        return getResponseEntity("jwt expire exception", null, 401);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorDetails> unrecognizedException(RuntimeException ex) {
        return getResponseEntity("unrecognized exception occurred", ex, 500);
    }
}

