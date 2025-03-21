import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { LearnerService } from '../learner.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  username: string = '';
 pass:string = '';
 cpass:string='';
 user: User=new User(0,"","","","","");
 errorMessage: string = '';
 showForgotPassword: boolean = false;
 isFormSubmitted: boolean = false;
 loginForm = new FormGroup<any>({});
 loginType: string = 'admin';
  constructor(private authService: AuthService, private router: Router,private fb:FormBuilder, private lService: LearnerService) {
    //const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  
  onSubmit() {
    
    this.user.userEmailId=this.loginForm.controls['email'].value;
    this.user.userPassword=this.loginForm.controls['password'].value;
    if (this.loginType === "admin") {
      this.authService.loginUser(this.user).subscribe(
        (response: any) => {
          console.log("*response8888",response);
          
            this.authService.storeLoggedInUser(response);
            localStorage.setItem('userInfo', JSON.stringify(response));
            localStorage.setItem('uname', response?.fullName);
            localStorage.setItem('uId', response?.userId);
            localStorage.setItem('role', response?.role);
           
             
             this.router.navigate(['/admindashboard']);
            
          }
          
        ,
        (error: any) => {
          console.error('Login failed:', error);
          console.log('>>>>>>>>>>>>>>>>>>', error?.error?.message );
          if (error?.error?.message === 'User not found') {
            this.errorMessage = "User Not found. Please check your email or password."
            return;
          }
          if (error.status === 401 || error.status === 404) {
            this.errorMessage = 'Invalid username or password';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
        }
      );
    } else {
      const learner:any={
        learnerEmailId:this.loginForm.controls['email'].value,
        learnerPassword:this.loginForm.controls['password'].value
      }
      this.lService.loginLearner(learner).subscribe((res: any) => {
        console.log("RESSSSSSS::::",res);
        if (res && res?.lid) {
       
          this.authService.storeLoggedInUser(res);
          localStorage.setItem('userInfo', JSON.stringify(res));
          localStorage.setItem('uname', res?.lName);
          localStorage.setItem('uId', res?.lid);
          localStorage.setItem('role', 'user');
          this.router.navigate(['/learnerdashboard']);
        }
      }
    );
    }
    
  }
  
  


  resetForm() {


    this.user.userEmailId = '';
    this.user.userPassword = '';
  }



  }