package com.newbridge.retroboard.controllers.securityconfig.filters;

import com.newbridge.retroboard.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {

    final UserDetailsService myUserDetailsService;
    final JwtUtil jwtUtil;

    private String getTokenFromQuery (String query) {
        if (query != null) {
            String[] pairs = query.split("&");
            return Arrays.stream(pairs).reduce("", (acc, value) -> {
               if (value.startsWith("Authorization"))  {
                    return acc + value.substring(value.indexOf('=') + 1);
               }
               return acc;
            });
        }
        return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String jwtToken = null;

        // token validation
        if (authorizationHeader != null && authorizationHeader.startsWith("token ")) {
            var split = authorizationHeader.split(" ");
            if (split.length >= 2) {
                jwtToken = split[1];
                username = jwtUtil.extractUsername(jwtToken);
            }
        } else {
            jwtToken = getTokenFromQuery(request.getQueryString());
	    if (jwtToken != null) {
                username = jwtUtil.extractUsername(jwtToken);
	    }
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails = this.myUserDetailsService.loadUserByUsername(username);
            if (jwtUtil.validateToken(jwtToken, userDetails)) {
                var usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }

        filterChain.doFilter(request, response);
    }
}
