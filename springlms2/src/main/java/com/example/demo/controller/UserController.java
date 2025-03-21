package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

		@Autowired
		private UserService as;
		
		@GetMapping("/all")
		public List<User> getUser(){
			return as.getUser();
		}	
			@PostMapping("/add")
			public User addUser(@RequestBody @Valid User a){
				return as.addUser(a);
			}
			@PostMapping("/login")
			public Optional<User> loginUser(@RequestBody  User a) {
				return as.loginUser(a);
			}
}
