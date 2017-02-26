import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {HomeComponent} from '../home/home.component';
import {ArduinoItemComponent} from "./arduino-item.component";

@Component({
  selector: 'app-arduinos',
  templateUrl: './arduinos.component.html',


})
export class ArduinosComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
