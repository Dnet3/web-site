import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { ArduinoComponent } from './arduino/arduino.component';
import { ArduinoListComponent } from './arduino/arduino-list/arduino-list.component';
import { ArduinoDetailComponent } from './arduino/arduino-detail/arduino-detail.component';
import {ArduinoItemComponent} from './arduino/arduino-item.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ProtectedComponent,
    ArduinoComponent,
    ArduinoListComponent,
    ArduinoDetailComponent,
      ArduinoItemComponent,
      ClientComponent,
      AddClientComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,routing, ReactiveFormsModule
  ],
  providers: [AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
