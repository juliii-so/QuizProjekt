package de.nrw.lwk.config;

import EnableWebSecurity;

@EnableWebSecurity
public class SecurityConfig{
     @Autowired
     public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
          auth.inMemoryAuthentication().withUser("user").password("password").role("USER");
     }
}