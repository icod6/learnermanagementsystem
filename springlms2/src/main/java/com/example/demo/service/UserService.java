package com.example.demo.service;

import java.util.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository ar;

	public List<User> getUser() {

		return ar.findAll();
	}

	public User addUser(User a) {

		return ar.save(a);

	}

	public Optional<User> loginUser(User a) {
		return this.ar.findByUserEmailIdAndUserPassword(a.userEmailId, a.userPassword);
	}
}
