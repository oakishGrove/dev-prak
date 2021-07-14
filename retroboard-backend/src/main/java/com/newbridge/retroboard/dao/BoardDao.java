package com.newbridge.retroboard.dao;

import com.newbridge.retroboard.dao.entities.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardDao extends JpaRepository<Board, Long> {
    List<Board> findAll();
}
