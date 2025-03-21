package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Learner;
import com.example.demo.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


public interface LearnerRepository extends JpaRepository<Learner, Integer>{
	Optional<Learner> findByLearnerEmailIdAndLearnerPassword(String lEmailId,String lPassword);

}