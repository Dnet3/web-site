import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import {AuthGuard} from "./auth.services";
import {ArduinosComponent}from './arduinos/arduinos.component';
import Auth = firebase.auth.Auth;

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}



]







export const routes: ModuleWithProviders = RouterModule.forRoot(router);
