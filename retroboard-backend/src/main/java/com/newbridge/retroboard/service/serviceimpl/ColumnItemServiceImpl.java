package com.newbridge.retroboard.service.serviceimpl;

import com.newbridge.retroboard.custommapper.ColumnItemDtoMapper;
import com.newbridge.retroboard.dao.ColumnItemDao;
import com.newbridge.retroboard.dao.entities.BoardColumn;
import com.newbridge.retroboard.dao.entities.ColumnItem;
import com.newbridge.retroboard.dto.AddColumnItemDto;
import com.newbridge.retroboard.dto.ItemDto;
import com.newbridge.retroboard.dto.BoardDetails;
import com.newbridge.retroboard.service.BoardColumnService;
import com.newbridge.retroboard.service.ColumnItemService;
import com.newbridge.retroboard.service.WsEventPublisher;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ColumnItemServiceImpl implements ColumnItemService {

    private final ColumnItemDao columnItemDao;
    private final ColumnItemDtoMapper customMapper;
    private final ModelMapper modelMapper;
    private final BoardColumnService boardColumnService;
    private final WsEventPublisher eventPublisher;

    @Override
    public ItemDto addColumnItem(AddColumnItemDto addColumnItemDto, String boardId) {
        var columnEntity = customMapper.mapFromDto(addColumnItemDto);
        ItemDto savedItem =  modelMapper.map(columnItemDao.save(columnEntity), ItemDto.class);
        eventPublisher.publishEvent(boardId, "item added");
        return savedItem;
    }

    @Override
    public List<ItemDto> getItems(String boardId, String columnId) {
        var rez = columnItemDao.findByBoardColumnId(Integer.decode(columnId));
        return rez.stream()
                .map(elem -> modelMapper.map(elem, ItemDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public void upVoteColumnItem(int itemId, String boardId) {
        ColumnItem columnItem = columnItemDao.findById(itemId).orElseThrow();
        if (columnItem != null) {
            int voteCount = columnItem.getVoteCount();
            voteCount++;
            columnItem.setVoteCount(voteCount);
            columnItemDao.save(columnItem);
            eventPublisher.publishEvent(boardId, "item upvoted");
        }
    }

    @Override
    public void deleteColumnItem(int itemId, String boardId) {
        columnItemDao.deleteById(itemId);
        eventPublisher.publishEvent(boardId, "item deleted");
    }

    @Override
    public List<BoardDetails> getBoardToDoItems(Long boardId) {
        BoardColumn column = boardColumnService.getActionItemsColumnByBoardId(boardId);
        int columnId = column.getId();

        return columnItemDao.findAllByBoardColumn_Id(columnId)
                .stream()
                .map(
                columnItem ->  modelMapper.map(columnItem, BoardDetails.class))
                .collect(Collectors.toList());
    }
}
