package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity//represents the data structure or model
@Table(name ="learner_table")
public class Learner {
	@Id//primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lid;
	@NotEmpty
	@Size(min = 2, message = "learnername contain atleast 2 characters")
	public String lName;
	

	@Column(name = "learnerEmailId", unique = true, length = 30)
	@NotEmpty
	@Email(message = "learner Email  is not valid!")
	public String learnerEmailId;


	@Column(name = "learnerPassword", length = 20)
	@NotEmpty
	@Size(min = 8, message = "Password length must be 8 and contain uppercase,lowercase,digits")
	//@Pattern(regexp = "(?=.\\d)(?=.[a-z])(?=.*[A-Z]).{8,}")
	public String learnerPassword;


	@Column(name="phone_number" ,unique=true)
	@NotEmpty
	@Pattern(regexp = "^[6-9]\\d{9}$", message = "Phone number must start with a digit between 6 and 9 and contain exactly 10 digits")
	@Size(min=10 ,max=10, message="phoneNumber must contain  10 digits")
	private String lphoneNumber;
	@NotEmpty
	@Size(min = 2, message = "learnerdegree contain atleast 2 characters")
	public String lDegree;
	@NotEmpty
	
	public String lpic;
	public int getLid() {
		return lid;
	}
	public void setLid(int lid) {
		this.lid = lid;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getLearnerEmailId() {
		return learnerEmailId;
	}
	public void setLearnerEmailId(String learnerEmailId) {
		this.learnerEmailId = learnerEmailId;
	}
	public String getLearnerPassword() {
		return learnerPassword;
	}
	public void setLearnerPassword(String learnerPassword) {
		this.learnerPassword = learnerPassword;
	}
	public String getLphoneNumber() {
		return lphoneNumber;
	}
	public void setLphoneNumber(String lphoneNumber) {
		this.lphoneNumber = lphoneNumber;
	}
	public String getlDegree() {
		return lDegree;
	}
	public void setlDegree(String lDegree) {
		this.lDegree = lDegree;
	}
	public String getLpic() {
		return lpic;
	}
	public void setLpic(String lpic) {
		this.lpic = lpic;
	}

	

}
