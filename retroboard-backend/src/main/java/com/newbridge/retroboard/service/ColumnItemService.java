package com.newbridge.retroboard.service;

import com.newbridge.retroboard.dto.AddColumnItemDto;
import com.newbridge.retroboard.dto.BoardDetails;
import java.util.List;
import com.newbridge.retroboard.dto.ItemDto;

public interface ColumnItemService {
    ItemDto addColumnItem(AddColumnItemDto addColumnItemDto, String boardId);
    List<ItemDto> getItems(String boardId, String columnId);
    void upVoteColumnItem(int itemId, String boardId);
    void deleteColumnItem(int itemId, String boardId);
    List<BoardDetails> getBoardToDoItems(Long boardId);

}
