package com.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Repository.UserRepository;
import com.project.entity.User;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@CrossOrigin()
public class UserController {
    private final UserRepository userRepository;
    private boolean loggedIn = false;

  
    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    

   
    @GetMapping("/check-login")
    public boolean checkLoggedInStatus() {
        return loggedIn;
    }
    
    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        userRepository.save(user);
        loggedIn=true;
    }
     

    @PostMapping("/login")
    public void loginUser(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmailId());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
        	loggedIn=true;
        	System.out.println(loggedIn);
        } 
        else {
        	loggedIn=false;
        	System.out.println(loggedIn);

        }
    }
    
    @GetMapping("/check-logout")
    public boolean checkLoggedoutStatus() {
    	loggedIn=false;
    	return loggedIn;
    }

   
}