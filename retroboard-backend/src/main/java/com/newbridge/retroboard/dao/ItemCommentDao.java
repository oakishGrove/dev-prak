package com.newbridge.retroboard.dao;

import com.newbridge.retroboard.dao.entities.ItemComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemCommentDao extends JpaRepository<ItemComment, Integer> {
    List<ItemComment> findByColumnItemId(Integer boardColumnId);
}
