package com.project.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.Service.ImageService;
import com.project.entity.Image;

@RestController
@CrossOrigin
public class ImageController {

	@Autowired
	MongoTemplate mongoTemplate;
    @Autowired
    private ImageService imageService;

    
    
    
    
    @PostMapping(value = "/upload")
    public void uploadImage(@RequestParam("image") MultipartFile file,String name,double price) throws IOException {
      Image image = new Image();
      image.setName(file.getOriginalFilename());
      image.setPrice(price);
      image.setData(file.getBytes());
      mongoTemplate.save(image);
    }

    @GetMapping("/images")
    public List<Image> getAllImages() {
      return mongoTemplate.findAll(Image.class);
    }

    
    
    
    @GetMapping(value = "/{imageId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody byte[] getProduct(@PathVariable String imageId) throws IOException {
      Image image = mongoTemplate.findById(imageId, Image.class);
      if (image != null) {
        return image.getData();
      }
      return null;
    }




}