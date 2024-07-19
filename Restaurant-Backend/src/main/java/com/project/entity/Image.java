package com.project.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "images")
public class Image {
	  @Id
	  private String id;
	  private String name;
	  private double price;
	  private byte[] data;

	  public Image() {
		  super();
	  }
	  
	  public Image(String name, double price,byte[] data) {
	    this.name = name;
	    this.data = data;
	    this.price=price;
	  }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	  public double getPrice() {
		  return price;
	  }
	  public void setPrice(double price) {
		  this.price=price;
	  }
	
	
	
	  // Getters and setters
	}



