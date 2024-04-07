package com.pickhacks2024.ProjectBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class ProjectBackendApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectBackendApplication.class, args);
	}

}
