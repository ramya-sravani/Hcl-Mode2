package com.empapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.empapp.entities.Employee;
import com.empapp.services.EmployeeService;


@SpringBootApplication
public class BookappApplication implements CommandLineRunner{

//	@Autowired
//	private EmployeeService empService;
	
	public static void main(String[] args) {
		SpringApplication.run(BookappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("rec are saved...");
//		empService.save(new Employee("Divya", 22));
//		empService.save(new Employee("Sravya", 25));
//		empService.save(new Employee("Krishna", 24));
//		empService.save(new Employee("Kiyansh", 1));
		
		
		
	}
}
