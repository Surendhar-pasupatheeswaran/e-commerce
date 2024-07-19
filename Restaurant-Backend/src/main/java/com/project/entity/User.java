package com.project.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="login")
public class User {
	
	@Id
	private String id;
	private String username;
	private String email;
	private String password;
	private String address;
	private String mobilenumber;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmailId() {
		return email;
	}
	public void setEmailId(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobileno() {
		return mobilenumber;
	}
	public void setMobileno(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public User(String id, String username, String email, String password, String address, String mobilenumber) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.address = address;
		this.mobilenumber = mobilenumber;
	}
	
}