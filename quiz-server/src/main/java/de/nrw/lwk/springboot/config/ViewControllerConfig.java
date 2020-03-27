package de.nrw.lwk.springboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ViewControllerConfig implements WebMvcConfigurer {
	public void addViewConrollers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
		registry.addViewController("/home").setViewName("index");

	}
}
