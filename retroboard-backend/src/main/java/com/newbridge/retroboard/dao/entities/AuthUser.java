package com.newbridge.retroboard.dao.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "auth_user")
public class AuthUser {
    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "auth_user_id")
    private long id;
    @Column(unique = true, name = "username")
    private String username;
    private String password;
    private String name;
    private String note;
    private boolean isActive;
    private boolean isNonLocked;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "auth_user_id", referencedColumnName = "auth_user_id")
    private List<AuthRole> authRoles;


}
