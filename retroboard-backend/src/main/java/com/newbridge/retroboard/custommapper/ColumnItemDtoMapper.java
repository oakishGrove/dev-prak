package com.newbridge.retroboard.custommapper;

import com.newbridge.retroboard.dao.entities.BoardColumn;
import com.newbridge.retroboard.dao.entities.ColumnItem;
import com.newbridge.retroboard.dto.AddColumnItemDto;
import org.springframework.stereotype.Component;

@Component
public class ColumnItemDtoMapper {
    public ColumnItem mapFromDto(AddColumnItemDto addColumnItemDto) {
        ColumnItem columnItem = new ColumnItem();
        var boardColumn = new BoardColumn();
        boardColumn.setId(addColumnItemDto.getBoardColumnId());

        columnItem.setBoardColumn(boardColumn);
        columnItem.setText(addColumnItemDto.getText());
        columnItem.setVoteCount(0);
        return columnItem;
    }
}
