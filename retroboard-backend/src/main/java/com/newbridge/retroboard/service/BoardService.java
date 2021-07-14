package com.newbridge.retroboard.service;

import com.newbridge.retroboard.controllers.securityconfig.CustomUserDetails;
import com.newbridge.retroboard.dao.entities.Board;
import com.newbridge.retroboard.dto.AddBoardRequest;
import com.newbridge.retroboard.dto.BoardDto;

import java.util.List;

public interface BoardService {
    List<BoardDto> getAllBoards();
    Board addBoard(AddBoardRequest addBoardRequest, CustomUserDetails userDetails);
    BoardDto getBoardById(String id);
}
