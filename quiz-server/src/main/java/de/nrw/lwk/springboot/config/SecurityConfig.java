package de.nrw.lwk.springboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	/**
	 * Legt den Benutzer user mit dem Passwort 123 an.
	 * 
	 */
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().passwordEncoder(passwordEncoder()).withUser("user")
				.password(passwordEncoder().encode("123")).roles("USER");
	}

	/**
	 * Legt fest, welche Seiten (Alle) passwortgeschützt sind und welche nicht.
	 */
	@Override
	public void configure(HttpSecurity security) throws Exception {
		security.authorizeRequests().antMatchers("/**").permitAll().anyRequest().authenticated()
				.and().formLogin().loginPage("/login").permitAll().and().logout().permitAll();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}