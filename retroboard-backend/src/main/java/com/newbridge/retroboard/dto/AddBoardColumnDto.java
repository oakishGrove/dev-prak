package com.newbridge.retroboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddBoardColumnDto {
    private String name;
    private String color;
    private long boardId;
    private boolean isVotable;
}
