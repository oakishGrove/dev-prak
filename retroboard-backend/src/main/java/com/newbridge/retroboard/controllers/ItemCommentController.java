package com.newbridge.retroboard.controllers;

import com.newbridge.retroboard.dto.AddItemCommentDto;
import com.newbridge.retroboard.dto.CommentDto;
import com.newbridge.retroboard.service.ItemCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemCommentController {

    private final ItemCommentService itemCommentService;

    @PostMapping("/boards/{boardId}/columns/{columnId}/items/{itemId}/comments")
    @ResponseStatus(HttpStatus.OK)
    public CommentDto addItemComment(@RequestBody AddItemCommentDto addItemCommentDto,
                                     @PathVariable("boardId") String boardId){
        return itemCommentService.addItemComment(addItemCommentDto, boardId);
    }

    @GetMapping("/boards/{boardId}/columns/{columnId}/items/{itemId}/comments")
    public List<CommentDto> getComments(
            @PathVariable("boardId") String boardId,
            @PathVariable("columnId") String columnId,
            @PathVariable("itemId") String itemId) {
        return itemCommentService.getComments(boardId, columnId, itemId);
    }
}
