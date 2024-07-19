package com.project.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.entity.Image;

public interface ImageRepository extends MongoRepository<Image, String>{

}
