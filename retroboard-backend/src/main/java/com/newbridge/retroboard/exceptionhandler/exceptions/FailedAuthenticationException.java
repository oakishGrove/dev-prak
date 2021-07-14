package com.newbridge.retroboard.exceptionhandler.exceptions;

public class FailedAuthenticationException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    public FailedAuthenticationException() {
    }
    public FailedAuthenticationException(String message) {
        super(message);
    }
    public FailedAuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
