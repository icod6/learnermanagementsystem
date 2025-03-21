import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminheader',
  standalone: false,
  
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  url: string = '/';
  userName: string = localStorage.getItem('uname') || '';
  constructor(
    private route: Router,
    private authService: AuthService
  ) { }



  ngOnInit(): void {
    
  }
  gotourl(url: string): void {
    if (url === 'logout') {
      this.authService.clientLogout();
      return;
    }
    this.route.navigate(["/"+url]);
  }
}

