package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.Learner;
import com.example.demo.entity.User;
import com.example.demo.repository.LearnerRepository;

import jakarta.validation.Valid;

@Service
public class LearnerService {
	@Autowired// automatically injects dependencies into classes, fields, methods, and constructo
	private LearnerRepository lr ;
	public List<Learner> getAllLearner(){
		return lr.findAll();	
	}
	
	public Learner addLearner(Learner l) {
		return lr.save(l);
	}
	
	
	public Learner updateLearner(int id, Learner l) {
		l.setLid(id);
		return lr.save(l);
	}
	
	public String deleteLearner(int id) {
		Learner l= lr.getById(id);
		this.lr.delete(l);
		return "Learner deleted successfully:";
	}
	public Optional<Learner> loginLearner(Learner l) {
		return this.lr.findByLearnerEmailIdAndLearnerPassword(l.getLearnerEmailId(),l.getLearnerPassword());
	}
	
}


