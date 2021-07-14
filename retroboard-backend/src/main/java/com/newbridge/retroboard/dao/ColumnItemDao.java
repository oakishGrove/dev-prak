package com.newbridge.retroboard.dao;

import com.newbridge.retroboard.dao.entities.ColumnItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ColumnItemDao extends JpaRepository<ColumnItem, Integer> {
    List<ColumnItem> findAllByBoardColumn_Id (int  boardColumnId);
    List<ColumnItem> findByBoardColumnId(Integer boardColumnId);

}
