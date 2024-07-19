package com.project.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.entity.User;

public interface UserRepository extends MongoRepository<User, String> {
	User findByEmail(String email);
}
