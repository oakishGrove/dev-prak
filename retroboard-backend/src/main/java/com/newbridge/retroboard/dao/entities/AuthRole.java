package com.newbridge.retroboard.dao.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "auth_role")
public class AuthRole {
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name="role")
    private String role;
}

