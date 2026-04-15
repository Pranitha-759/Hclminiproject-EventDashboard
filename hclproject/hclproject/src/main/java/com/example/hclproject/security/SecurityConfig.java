package com.example.hclproject.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http

            // disable csrf (required for POST APIs)
            .csrf(csrf -> csrf.disable())

            // allow all urls
            .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/h2-console/**").permitAll()
                    .requestMatchers("/auth/**").permitAll()
                    .requestMatchers("/events/**").permitAll()
                    .requestMatchers("/booking/**").permitAll()
                    .anyRequest().permitAll()
            )

            // allow iframe for H2 console
            .headers(headers -> headers
                    .frameOptions(frame -> frame.disable())
            )

            // disable default login form
            .formLogin(form -> form.disable());

        return http.build();
    }
}