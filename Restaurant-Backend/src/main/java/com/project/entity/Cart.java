package com.project.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Cart")
public class Cart {
	  @Id
	  private String id;
	  
	  private Image image;
	  private User user;
	  public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Image getImage() {
		return image;
	}
	public void setImage(Image image) {
		this.image = image;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Cart(Image image, User user) {
		super();
		this.image = image;
		this.user = user;
	}
	  
	  
	  
	  
	  
	}



