package com.newbridge.retroboard.custommapper;

import com.newbridge.retroboard.dao.entities.ColumnItem;
import com.newbridge.retroboard.dao.entities.ItemComment;
import com.newbridge.retroboard.dto.AddItemCommentDto;
import org.springframework.stereotype.Component;

@Component
public class ItemCommentDtoMapper {
    public ItemComment mapFromDto(AddItemCommentDto addItemCommentDto) {
        ItemComment itemComment = new ItemComment();
        var columnItem = new ColumnItem();
        columnItem.setId(addItemCommentDto.getColumnItemId());

        itemComment.setColumnItem(columnItem);
        itemComment.setText(addItemCommentDto.getText());
        itemComment.setGifUrl(addItemCommentDto.getGifUrl());
        return itemComment;
    }
}
