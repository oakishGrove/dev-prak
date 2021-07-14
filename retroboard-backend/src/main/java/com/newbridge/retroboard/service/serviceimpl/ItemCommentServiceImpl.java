package com.newbridge.retroboard.service.serviceimpl;

import com.newbridge.retroboard.custommapper.ItemCommentDtoMapper;
import com.newbridge.retroboard.dao.ItemCommentDao;
import com.newbridge.retroboard.dto.AddItemCommentDto;
import com.newbridge.retroboard.dto.CommentDto;
import com.newbridge.retroboard.service.ItemCommentService;
import com.newbridge.retroboard.service.WsEventPublisher;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ItemCommentServiceImpl implements ItemCommentService {

    private final ItemCommentDao itemCommentDao;
    private final ItemCommentDtoMapper customMapper;
    private final ModelMapper modelMapper;
    private final WsEventPublisher eventPublisher;

    @Override
    public CommentDto addItemComment(AddItemCommentDto addItemCommentDto, String boardId) {
        var commentEntity = customMapper.mapFromDto(addItemCommentDto);
        CommentDto mappedEntity = modelMapper.map(itemCommentDao.save(commentEntity), CommentDto.class);
        eventPublisher.publishEvent(boardId, "comment added");
        return mappedEntity;
    }

    @Override
    public List<CommentDto> getComments(String boardId, String columnId, String itemId) {
        var result = itemCommentDao.findByColumnItemId(Integer.decode(itemId));
        return result.stream()
                .map(elem -> modelMapper.map(elem, CommentDto.class))
                .collect(Collectors.toList());
    }
}
