package com.company;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.company.hangar.model.Hangar;
import com.company.hangar.repository.HangarRepository;



@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	@Bean
	CommandLineRunner init(HangarRepository hangarRepository) {
		String[][] data = {
				{"Hangar1"},
				{"Hangar2"},
				{"Hangar3"}
				//{"Hangar1","adress1"},
				//{"Hangar2","adress2"},
				//{"Hangar3","adress3"}
		};
		
		return (person) -> Arrays.asList(data)
				.forEach(a -> {
					Hangar hangar = new Hangar();
					hangar.setName(a[0]);
					//hangar.setAdress(a[1]);
					hangarRepository.save(hangar);
				});
	}

}
