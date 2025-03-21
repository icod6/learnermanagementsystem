import { Component } from '@angular/core';
import { Learner } from '../login/learner';
import { debounceTime, Subject, take } from 'rxjs';
import { LearnerService } from '../learner.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learner-list',
  standalone: false,
  
  templateUrl: './learner-list.component.html',
  styleUrl: './learner-list.component.css'
})
export class LearnerListComponent {
  searchText: string = '';
  learner: Learner[] = [];
  searchSubject=new Subject<string>();
  backup:Learner[]=[];
  isAdmin:boolean=localStorage.getItem('role')==='admin';


  constructor(
    private lservice: LearnerService,
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(500)).subscribe((test:string)=>{
console.log("TEEEXT :",test);
this.learner=this.backup.filter((item:Learner)=>item.lName.toLowerCase().includes(test.toLowerCase()));


    })
   this.getAllLearner();
  }


  getAllLearner(): void {
    this.lservice.getAllLearner().subscribe((res) => {
      if (res && Array.isArray(res) && res.length > 0) {
        this.learner = res;
        this.backup=res;
      } else {
        this.learner = [];
        this.backup=[];
      }
     });
  }


  onSearchInput(ev: any): void {
    this.searchSubject.next(this.searchText)
  }


  deleteLearner(id: any): void {
    this.lservice.deleteLearner(id).pipe(take(1)).subscribe((res) => {
      if (res) {
        alert("Learner Delete successfully");
        this.getAllLearner();
      }
    });
  }


  updateLearner(id: any): void {
    this.router.navigate(["/addLearner"], {queryParams: {id: id}});
  }
}

