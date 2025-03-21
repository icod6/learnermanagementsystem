package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUserEmailIdAndUserPassword(String userEmailId,String userPassword);
}