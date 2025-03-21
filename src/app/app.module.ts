import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AddLearnerComponent } from './add-learner/add-learner.component';
import { LearnerhomeComponent } from './learnerhome/learnerhome.component';
import { LearnerheaderComponent } from './learnerheader/learnerheader.component';
import { LearnerprofileComponent } from './learnerprofile/learnerprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LearnerListComponent } from './learner-list/learner-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LearnerDashboardComponent } from './learner-dashboard/learner-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AdminDashboardComponent,
    AdminheaderComponent,
    AppHomeComponent,
    AppheaderComponent,
    AddLearnerComponent,
    LearnerhomeComponent,
    LearnerheaderComponent,
    LearnerprofileComponent,
    ContactusComponent,
    LearnerListComponent,
    LoginComponent,
    RegisterComponent,
    UpdateProfileComponent,
    LearnerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
