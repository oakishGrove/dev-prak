package com.newbridge.retroboard.controllers;

import com.newbridge.retroboard.dto.AddColumnItemDto;
import com.newbridge.retroboard.dto.ItemDto;
import com.newbridge.retroboard.dto.BoardDetails;
import com.newbridge.retroboard.service.ColumnItemService;
import com.newbridge.retroboard.service.WsEventPublisher;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ColumnItemController {

    private final ColumnItemService columnItemService;
    private final WsEventPublisher eventPublisher;

    @PostMapping("/boards/{boardId}/columns/{columnId}/items")
    @ResponseStatus(HttpStatus.OK)
    public ItemDto addColumnItem(@RequestBody AddColumnItemDto addColumnItemDto,
                                 @PathVariable("boardId") String boardId){
        return columnItemService.addColumnItem(addColumnItemDto, boardId);
    }

    @GetMapping("/boards/{boardId}/boardDetails")
    @ResponseStatus(HttpStatus.OK)
    public List<BoardDetails> getBoardToDoItems(@PathVariable("boardId") Long boardId){
        return columnItemService.getBoardToDoItems(boardId);
    }

    @GetMapping("/boards/{boardId}/columns/{columnId}/items")
    public List<ItemDto> getItems(
            @PathVariable("boardId") String boardId,
            @PathVariable("columnId") String columnId) {
        return columnItemService.getItems(boardId, columnId);
    }

    @PutMapping("/boards/{boardId}/columns/{columnId}/items/{itemId}/upvote")
    @ResponseStatus(HttpStatus.OK)
    public void upVoteColumnItem(@PathVariable int itemId,
                                 @PathVariable("boardId") String boardId) {
        columnItemService.upVoteColumnItem(itemId, boardId);
    }

    @DeleteMapping("/boards/{boardId}/columns/{columnId}/items/{itemId}")
    public void deleteColumnItem(@PathVariable int itemId,
                                 @PathVariable("boardId") String boardId) {
        columnItemService.deleteColumnItem(itemId, boardId);
    }
}
