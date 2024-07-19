package com.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Service.CartService;
import com.project.entity.Cart;

@RestController
@CrossOrigin
public class CartController {

	@Autowired
	CartService cartser;
	
	@GetMapping("/addToCart/{productId}")
	public Cart addToCart(@PathVariable(name="productId") String productId)
	{
		return cartser.addToCart(productId);
	}
	
	@GetMapping("/createTransaction/{amount}")
	public void createTransaction(@PathVariable(name="amount") Double price) {
		
	}
	
}
