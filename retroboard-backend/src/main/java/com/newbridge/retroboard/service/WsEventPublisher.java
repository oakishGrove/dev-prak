package com.newbridge.retroboard.service;

import com.newbridge.retroboard.controllers.WsController;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

// this service should be used to notify board room about changes in the BE

@Component
@RequiredArgsConstructor
public class WsEventPublisher {
    private final SimpMessagingTemplate messagingTemplate;

    public void publishEvent(String boardId, String message) {
        messagingTemplate.convertAndSend("/topic"+ WsController.ROOM + '/' + boardId, message);
    }
}
