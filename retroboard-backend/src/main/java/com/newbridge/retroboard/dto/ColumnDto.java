package com.newbridge.retroboard.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ColumnDto {
    private int id;
    private String name;
    private String color;
    private String boardId;
    private boolean isVotable;
}
