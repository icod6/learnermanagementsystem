import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginService } from './guard/admin-login.service';
import { AddLearnerComponent } from './add-learner/add-learner.component';
import { LearnerListComponent } from './learner-list/learner-list.component';
import { LearnerhomeComponent } from './learnerhome/learnerhome.component';
import { LearnerLoginService } from './guard/learner-login.service';
import { AdminLearnerService } from './guard/admin-learner.service';
const routes: Routes = [
  { path: 'home', component: AppHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  

  { path: 'admindashboard', component: AdminDashboardComponent, canActivate: [AdminLoginService] },
  { path: 'addLearner', component: AddLearnerComponent, canActivate: [AdminLoginService] },
  { path: 'learnerlist', component: LearnerListComponent, canActivate: [AdminLearnerService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
  {path:'lhome',component:LearnerhomeComponent, canActivate: [LearnerLoginService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
