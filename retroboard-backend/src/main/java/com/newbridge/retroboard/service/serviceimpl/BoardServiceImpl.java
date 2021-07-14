package com.newbridge.retroboard.service.serviceimpl;

import com.newbridge.retroboard.controllers.securityconfig.CustomUserDetails;
import com.newbridge.retroboard.dao.BoardDao;
import com.newbridge.retroboard.dao.entities.Board;
import com.newbridge.retroboard.dao.entities.BoardColumn;
import com.newbridge.retroboard.dto.AddBoardColumnDto;
import com.newbridge.retroboard.dto.AddBoardRequest;
import com.newbridge.retroboard.dto.BoardDto;
import com.newbridge.retroboard.exceptionhandler.exceptions.ResourceNotFoundException;
import com.newbridge.retroboard.service.BoardColumnService;
import com.newbridge.retroboard.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardDao boardDao;
    private final BoardColumnService boardColumnService;
    private final ModelMapper modelMapper;

    @Override
    public List<BoardDto> getAllBoards() {
        List<Board> boards = boardDao.findAll();
        return boards.stream()
                .map(board -> modelMapper.map(board, BoardDto.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public Board addBoard(AddBoardRequest addBoardRequest, CustomUserDetails userDetails) {
        addBoardRequest.setAuthUserId(userDetails.getId());
        Board board = modelMapper.map(addBoardRequest,Board.class);

        board.setDateCreated(LocalDate.now());
        board =  boardDao.save(board);

        //add fixed board columns
        boardColumnService.addBoardColumn(AddBoardColumnDto
                .builder()
                .name("Went Well")
                .color("#3BA59E")
                .boardId(board.getId())
                .isVotable(true)
                .build());

        boardColumnService.addBoardColumn(AddBoardColumnDto
                .builder()
                .isVotable(true)
                .name("To Improve")
                .color("#D57392")
                .boardId(board.getId())
                .build());

        boardColumnService.addBoardColumn(AddBoardColumnDto
                .builder()
                .name("Action Items")
                .isVotable(false)
                .color("#4F71A9")
                .boardId(board.getId())
                .build());

        return board;
    }

    @Override
    public BoardDto getBoardById(String id) {
        Board board = boardDao
                .findById(Long.decode(id))
                .orElseThrow(() -> new ResourceNotFoundException("Board by this id doesn't exist"));
        return modelMapper.map(board, BoardDto.class);
    }
}
