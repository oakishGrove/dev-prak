package com.newbridge.retroboard.dao;

import com.newbridge.retroboard.dao.entities.BoardColumn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BoardColumnDao extends JpaRepository<BoardColumn, Integer> {
    List<BoardColumn> findByBoardId(Long boardId);
    BoardColumn findByBoard_IdAndName(Long boardId, String name);
}
