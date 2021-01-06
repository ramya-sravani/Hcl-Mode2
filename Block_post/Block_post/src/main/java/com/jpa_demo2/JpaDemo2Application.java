package com.jpa_demo2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.jpa_demo2.entities.Location;
import com.jpa_demo2.entities.Posts;
import com.jpa_demo2.entities.Users;
import com.jpa_demo2.repo.LocationRepo;
import com.jpa_demo2.repo.PostRepo;
import com.jpa_demo2.repo.UserRepo;

@SpringBootApplication
public class JpaDemo2Application implements CommandLineRunner {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private PostRepo postRepo;

	@Autowired
	private LocationRepo locRepo;

	public static void main(String[] args) {
		SpringApplication.run(JpaDemo2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Location l1 = new Location("nellore");
		Location l2 = new Location("chennai");
		Location l3 = new Location("delhi");

		Users u1 = new Users("Ramya", "p", "ra@gmail.com", l1);
		Users u2 = new Users("Frooty", "B", "fr@gmail.com", l2);
		Users u3 = new Users("Nicky", "pv", "nia@gmail.com", l3);

		Posts p1 = new Posts("Abot Java", "All", "java is a PL book", u1);
		Posts p2 = new Posts("design", "some", "about Design", u2);
		Posts p3 = new Posts("mechanical", "public", "about machine", u3);

		l1.getUser().add(u1);
		l2.getUser().add(u2);
		l3.getUser().add(u3);

		u1.getPosts().add(p1);
		u2.getPosts().add(p2);
		u3.getPosts().add(p3);

		locRepo.save(l1);
		locRepo.save(l2);
		locRepo.save(l3);

		userRepo.save(u1);
		userRepo.save(u2);
		userRepo.save(u3);

		postRepo.save(p1);
		postRepo.save(p2);
		postRepo.save(p3);

	}

}
