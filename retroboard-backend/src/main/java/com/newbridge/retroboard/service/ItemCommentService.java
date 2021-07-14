package com.newbridge.retroboard.service;

import com.newbridge.retroboard.dto.AddItemCommentDto;
import com.newbridge.retroboard.dto.CommentDto;

import java.util.List;

public interface ItemCommentService {
    CommentDto addItemComment(AddItemCommentDto addItemCommentDto, String boardId);
    List<CommentDto> getComments(String boardId, String columnId, String itemId);
}
