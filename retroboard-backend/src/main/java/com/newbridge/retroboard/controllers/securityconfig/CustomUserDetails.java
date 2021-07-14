package com.newbridge.retroboard.controllers.securityconfig;

import com.newbridge.retroboard.dao.entities.AuthUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class CustomUserDetails implements UserDetails {

    private final String userName;
    private final String password;
    private final long id;

    private final boolean isActive;
    private final boolean isNonLocked;

    private List<GrantedAuthority> grantedAuthorities;

    public CustomUserDetails(AuthUser authUser) {
        this.userName = authUser.getUsername();
        this.password = authUser.getPassword();
        this.id = authUser.getId();
        this.isNonLocked = authUser.isNonLocked();
        this.isActive = authUser.isActive();
        this.grantedAuthorities = authUser.getAuthRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRole()))
                .collect(Collectors.toList());
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isActive;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isActive;
    }

    @Override
    public boolean isEnabled() {
        return isActive;
    }

    public long getId() {
        return id;
    }
}
