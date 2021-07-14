package com.newbridge.retroboard.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class WsController {

    private final SimpMessagingTemplate simpMessagingTemplate;

    public static final String ROOM = "/ws-board";

    @MessageMapping(ROOM+"/{boardId}")
    @SendTo("/topic"+ROOM+"/{boardId}")
    public String greeting() {
        return "response from server";
    }
}
