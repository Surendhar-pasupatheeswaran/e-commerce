package com.project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Repository.CartRepo;
import com.project.Repository.ImageRepository;
import com.project.Repository.UserRepository;
import com.project.entity.Cart;
import com.project.entity.Image;
import com.project.entity.User;

@Service
public class CartService {

	@Autowired
	CartRepo cartrepo;
	@Autowired
	UserRepository userrepo;
	@Autowired
	ImageRepository imarepo;
	User user;
	
	
	
	public Cart addToCart(String productId) {
		Image product=imarepo.findById(productId).get(); 
	
		
	if(product!=null ) {
		Cart cart=new Cart(product,user);
		return cartrepo.save(cart);
	}
		
	return null;
	}
	
	
	public void createTransaction(Double amount) {
		//amount
		//currency
		//key
		//secret key
	}
}
