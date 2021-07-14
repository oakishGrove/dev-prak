package com.newbridge.retroboard.service.serviceimpl;

import com.newbridge.retroboard.dao.BoardColumnDao;
import com.newbridge.retroboard.dao.entities.BoardColumn;
import com.newbridge.retroboard.dto.AddBoardColumnDto;
import com.newbridge.retroboard.dto.ColumnDto;
import com.newbridge.retroboard.service.BoardColumnService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardColumnServiceImpl implements BoardColumnService {

    private final BoardColumnDao boardColumnDao;

    private final ModelMapper modelMapper;

    @Override
    public BoardColumn addBoardColumn(AddBoardColumnDto addBoardColumnDto) {
        BoardColumn boardColumn = modelMapper.map(addBoardColumnDto, BoardColumn.class);
        return boardColumnDao.save(boardColumn);
    }

    @Override
    public BoardColumn getActionItemsColumnByBoardId(Long boardId) {
        return boardColumnDao.findByBoard_IdAndName(boardId, "Action Items");
    }

    @Override
    public List<ColumnDto> getBoardColumnsIdList(String boardId) {
        var rez = boardColumnDao.findByBoardId(Long.decode(boardId));
        return rez.stream()
                .map(elem -> modelMapper.map(elem, ColumnDto.class))
                .collect(Collectors.toList());
    }

}
