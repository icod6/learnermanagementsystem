import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appheader',
  standalone: false,
  
  templateUrl: './appheader.component.html',
  styleUrl: './appheader.component.css'
})
export class AppheaderComponent {
  url: string = '/';


  constructor(
    private route: Router
  ) { }



    

  gotourl(url: string): void {
    this.route.navigate(["/"+url]);
  }

}
