package com.newbridge.retroboard.controllers;

import com.newbridge.retroboard.controllers.securityconfig.CustomUserDetails;
import com.newbridge.retroboard.dao.entities.Board;
import com.newbridge.retroboard.dao.entities.BoardColumn;
import com.newbridge.retroboard.dto.AddBoardColumnDto;
import com.newbridge.retroboard.dto.AddBoardRequest;
import com.newbridge.retroboard.dto.BoardDto;
import com.newbridge.retroboard.service.BoardColumnService;
import com.newbridge.retroboard.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/boards")
    @ResponseStatus(HttpStatus.OK)
    public List<BoardDto> getAllBoards() {
        return boardService.getAllBoards();
    }

    @GetMapping("/boards/{id}")
    public BoardDto getBoardById(@PathVariable("id") String id) {
        return boardService.getBoardById(id);
    }

    @PostMapping("/boards")
    @ResponseStatus(HttpStatus.OK)
    public Board addBoard(@RequestBody AddBoardRequest addBoardRequest, @AuthenticationPrincipal CustomUserDetails userDetails){
        Board board = boardService.addBoard(addBoardRequest, userDetails);

        return board;
        //return boardService.addBoard(addBoardRequest);
    }
}
