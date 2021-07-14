package com.newbridge.retroboard.controllers;

import com.newbridge.retroboard.dto.AuthenticationRequest;
import com.newbridge.retroboard.dto.AuthenticationResponse;
import com.newbridge.retroboard.dto.TempRetVal;
import com.newbridge.retroboard.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import com.newbridge.retroboard.service.WsEventPublisher;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final WsEventPublisher eventPublisher;

    // TODO : delete after web sockets testing is done
    @GetMapping("/upvote")
//     @GetMapping("/upvote/{boardId}")
    public void upvoteWsTest() {
//     public void upvoteWsTest(@PathVariable("boardId") String boardId) {
        String boardId = "11";
        String actionMessage = "refresh board";
        // use this in service after successful operation that
        // needs to notify FE about change in board
        eventPublisher.publishEvent(boardId, actionMessage);
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/test-admin")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public TempRetVal testAdminPermission() {
        return TempRetVal
                .builder()
                .retval("admin")
                .build();
    }

    @Secured("ROLE_USER")
    @GetMapping("/test-user")
    public TempRetVal testUserPermission() {
        return new TempRetVal("user");
    }

    // authorization
    @GetMapping("/auth")
    public ResponseEntity<List<String>> getTokenAuthorities(HttpServletRequest request) {
        return ResponseEntity.ok(authService.getAuthorities(
                        request.getHeader("Authorization")
                ));
    }

    // authentication
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest authReq) {
        return ResponseEntity.ok(authService.authenticate(authReq));
    }
}
