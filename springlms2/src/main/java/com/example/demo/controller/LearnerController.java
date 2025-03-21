package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Learner;
import com.example.demo.repository.LearnerRepository;
import com.example.demo.service.LearnerService;

import jakarta.validation.Valid;

@RestController//for making restful services
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/learner")//to map request to controller method

public class LearnerController {
	@Autowired 
	private LearnerService ls;
	@Autowired// automatically injects dependencies into classes, fields, methods, and constructo
	private LearnerRepository lr ;
	
	@GetMapping("/all")
	public List<Learner> getAllLearner(){
		return ls.getAllLearner();
	}
	
	@PostMapping("/add")							
	//public Learner addLearner (@Valid @RequestBody  Learner l) {
	//return ls.addLearner(l);}
	public ResponseEntity<Learner> registerLearner(@Valid@RequestBody Learner Learner){
		return new
				ResponseEntity<Learner>(lr.save(Learner),HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	public Learner updateLearner(@PathVariable int id,@RequestBody Learner l) {
		return ls.updateLearner(id, l);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteLearner(@PathVariable int id) {
		 ls.deleteLearner(id);
		 return "Learner deleted :";
	}
	@PostMapping("/login")
	public Optional<Learner> loginLearner(@RequestBody Learner l) {
		return ls.loginLearner(l);
	}
	
	@GetMapping("byId/{id}")
	public Learner getLearnerById(@PathVariable int id) {
		return lr.findById(id).get();
	}
}


