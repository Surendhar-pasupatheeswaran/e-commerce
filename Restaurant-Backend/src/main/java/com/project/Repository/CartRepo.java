package com.project.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.entity.Cart;

public interface CartRepo extends MongoRepository<Cart, String> {

}
