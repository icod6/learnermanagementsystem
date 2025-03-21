import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learnerheader',
  standalone: false,
  
  templateUrl: './learnerheader.component.html',
  styleUrl: './learnerheader.component.css'
})
export class LearnerheaderComponent {
  url: string = '/';
  userName: string = localStorage.getItem('uname') || '';
  constructor(
    private route: Router,
    private authService: AuthService
  ) { }



  ngOnInit(): void {
    
  }
  gotourl(url: string): void {
    if (url === 'logoutt') {
      this.authService.clientLogout();
      return;
    }
    this.route.navigate(["/"+url]);
  }
}