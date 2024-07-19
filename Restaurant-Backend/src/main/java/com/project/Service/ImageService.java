package com.project.Service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import com.project.Repository.ImageRepository;
import com.project.entity.Image;


@Service

public class ImageService {
	@Autowired
    private ImageRepository imageRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    
	
}
