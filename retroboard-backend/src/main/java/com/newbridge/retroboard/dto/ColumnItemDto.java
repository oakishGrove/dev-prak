package com.newbridge.retroboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ColumnItemDto {
    private int itemId;
    private String text;
    private int voteCount;
    private int columnId;
}

