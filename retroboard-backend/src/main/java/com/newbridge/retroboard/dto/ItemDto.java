package com.newbridge.retroboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
    private int id;
    private String text;
    private int voteCount;
    private int boardColumnId;
}
