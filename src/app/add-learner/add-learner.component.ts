import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Learner } from '../login/learner';
import { LearnerService } from '../learner.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-learner',
  standalone: false,
  
  templateUrl: './add-learner.component.html',
  styleUrl: './add-learner.component.css'
})
export class AddLearnerComponent {
  lid: number=0 ;
  lName: string='';
  learnerEmailId: string='';
  learnerPassword: string='' ;
  errorMessage:string='';
  lphoneNumber:string='';
  lDegree:string='';
  lpic:string='';
  isEdit: boolean = false;
  
  constructor(
    private lService: LearnerService,
    private authService: AuthService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.queryParams.subscribe((res: any) => {
      if (res && res?.id) {
        this.isEdit = true;
        this.lService.getLearnerById(res?.id).pipe(take(1)).subscribe((res: Learner) => {
          if (res && res?.lid) {
            this.lName = res?.lName;
            this.learnerEmailId = res?.learnerEmailId;
            this.lid=res?.lid;
            this.lphoneNumber=res?.lphoneNumber;
            this.lDegree=res?.lDegree;
            this.lpic=res?.lpic;
            this.learnerPassword = res?.learnerPassword;
          }
        });
      }
      else{
        this.isEdit=false;
      }
    })
  }


  navigateToHome(): void {
    this.authService.navigate('learnerlist');
  }
  addLearner(): void {
    if (this.lName === '') {
      this.errorMessage = 'Name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.learnerEmailId === '') {
      this.errorMessage = 'Email should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = regExp.test(this.learnerEmailId)
    if (!isValidEmail) {
      this.errorMessage = 'Email is not valid';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }      
    if (this.lDegree === '') {
      this.errorMessage = 'Please select ldegree';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.learnerPassword === '') {
      this.errorMessage = 'Password should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    this.errorMessage = '';
    const body :Learner= {
      lDegree: this.lDegree,
      learnerEmailId:this.learnerEmailId,
      learnerPassword:this.learnerPassword,
      lName:this.lName,
      lphoneNumber:this.lphoneNumber,
      lpic:this.lpic
    };
    if (!this.isEdit) {
      this.lService.addLearner(body).pipe(take(1)).subscribe((res) => {
        if (res && res?.lid) {
          alert("learner added successfully");
          this.navigateToHome();
        }
      });
    } else {
      this.lService.updateLearner(body, this.lid).pipe(take(1)).subscribe((res) => {
        if (res && res.lid) {
          alert("learner update successfully");
          this.navigateToHome();
        }
      });
    }
  
  }
}