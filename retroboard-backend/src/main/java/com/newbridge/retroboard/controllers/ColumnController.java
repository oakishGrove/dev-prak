package com.newbridge.retroboard.controllers;

import com.newbridge.retroboard.dto.ColumnDto;
import com.newbridge.retroboard.service.BoardColumnService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ColumnController {

    private final BoardColumnService boardColumnService;

    @GetMapping("/boards/{boardId}/columns")
    public List<ColumnDto> getBoardColumnsIdList(@PathVariable("boardId") String boardId) {
        return boardColumnService.getBoardColumnsIdList(boardId);
    }

}
