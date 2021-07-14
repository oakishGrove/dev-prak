package com.newbridge.retroboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddBoardRequest {
    private Long boardId;
    private String boardName;
    private LocalDate boardDateCreated;
    private Long authUserId;
}
