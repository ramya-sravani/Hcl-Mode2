package com.jpa_demo2.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa_demo2.entities.Posts;

@Repository
public interface PostRepo extends JpaRepository<Posts, Integer> {

}
