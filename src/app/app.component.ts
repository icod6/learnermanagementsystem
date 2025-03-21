import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnermanagement-frontend';
  isLearnerLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (typeof localStorage !== 'undefined') {
      const role = localStorage.getItem("role");
      if (role !== null && role === 'user') {
        setTimeout(() => {
          this.isLearnerLoggedIn = true;
          this.isAdminLoggedIn = false;
        }, 100);
      } else {
        if (role !== null && role === 'admin') {
          setTimeout(() => {
            this.isAdminLoggedIn = true;
            this.isLearnerLoggedIn = false;
          }, 100);
        } {
          setTimeout(() => {
            this.isLearnerLoggedIn = false;
            this.isAdminLoggedIn = false;
          }, 1);
        }
      }
    }
    });

  }
}
