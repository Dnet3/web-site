import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


import {AuthGuard} from "./auth.services";
import {routes} from "./app.routes";
import { ArduinosComponent } from './arduinos/arduinos.component';
import { HeaderComponent } from './header.component';
import { ArduinoListComponent } from './arduinos/arduino-list/arduino-list.component';
import { ArduinoItemComponent } from './arduinos/arduino-item.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBLagVugFSNhJlXBzBSekzoHseOArT7GaQ",
  authDomain: "lammsite-fc813.firebaseapp.com",
  databaseURL: "https://lammsite-fc813.firebaseio.com",
  storageBucket: "lammsite-fc813.appspot.com",
  messagingSenderId: "482319848745"

};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    HomeComponent,
    ArduinosComponent,
    HeaderComponent,
    ArduinoListComponent,
    ArduinoItemComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes



  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
