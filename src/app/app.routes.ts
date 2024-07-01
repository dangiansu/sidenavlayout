import { Routes } from '@angular/router';
import { DashwordComponent } from './components/dashword/dashword.component';
import { StudentsComponent } from './components/students/students.component';
import { ParentsComponent } from './components/parents/parents.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashwordComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' } ,
    { path: 'students', component: StudentsComponent },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'parents' , component: ParentsComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
    
  ];