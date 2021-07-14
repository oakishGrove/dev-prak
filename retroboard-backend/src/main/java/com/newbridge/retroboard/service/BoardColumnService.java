package com.newbridge.retroboard.service;

import com.newbridge.retroboard.dao.entities.BoardColumn;
import com.newbridge.retroboard.dto.AddBoardColumnDto;
import com.newbridge.retroboard.dto.ColumnDto;
import java.util.List;

public interface BoardColumnService {

    BoardColumn addBoardColumn(AddBoardColumnDto addBoardColumnDto);
    List<ColumnDto> getBoardColumnsIdList(String boardId);
    BoardColumn getActionItemsColumnByBoardId(Long boardId);
}
