package com.newbridge.retroboard.dao.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "column_item")
public class ColumnItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "TEXT")
    private String text;
    @Column(name = "VOTE_COUNT")
    private int voteCount;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COLUMN_ID")
    private BoardColumn boardColumn;

}
