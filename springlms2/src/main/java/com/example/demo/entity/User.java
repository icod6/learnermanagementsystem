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

@Entity
@Table(name ="user_table")//table is created
public class User {
		@Id//primary key
		@GeneratedValue(strategy = GenerationType.IDENTITY)//auto increment
		private int userId;


		@NotEmpty
		@Size(min = 5, message = "Fullname contain atleast 5 characters")
	public String fullName;


		@Column(name = "email_id", unique = true, length = 30)
		@NotEmpty
		@Email(message = "Email  is not valid!")
		public String userEmailId;


		@Column(name = "password", length = 20)
		@NotEmpty
		@Size(min = 8, message = "Password length must be 8 and contain uppercase,lowercase,digits")
//		@Pattern(regexp = "(?=.\\d)(?=.[a-z])(?=.*[A-Z]).{8,}")
		public String userPassword;


		@Column(name="phone_number" ,unique=true)
		@NotEmpty
		@Pattern(regexp = "^[6-9]\\d{9}$", message = "Phone number must start with a digit between 6 and 9 and contain exactly 10 digits")
		@Size(min=10 ,max=10, message="phoneNumber must contain  10 digits")
		private String phoneNumber;
		
		
		public int getUserId() {
			return userId;
		}


		public void setUserId(int userId) {
			this.userId = userId;
		}


		public String getFullName() {
			return fullName;
		}


		public void setFullName(String fullName) {
			this.fullName = fullName;
		}


		public String getUserEmailId() {
			return userEmailId;
		}


		public void setUserEmailId(String userEmailId) {
			this.userEmailId = userEmailId;
		}


		public String getUserPassword() {
			return userPassword;
		}


		public void setUserPassword(String userPassword) {
			this.userPassword = userPassword;
		}


		public String getPhoneNumber() {
			return phoneNumber;
		}


		public void setPhoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}


		public String getRole() {
			return role;
		}


		public void setRole(String role) {
			this.role = role;
		}


		@NotEmpty
		private String role;
		
		
}
