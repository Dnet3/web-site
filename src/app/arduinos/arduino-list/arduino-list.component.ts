import { Component, OnInit } from '@angular/core';
import {Arduino} from "../arduino";
import {ArduinoItemComponent} from "../arduino-item.component";

@Component({
  selector: 'app-arduino-list',
  templateUrl: './arduino-list.component.html'

})
export class ArduinoListComponent implements OnInit {
  arduinos: Arduino[] = [];
  arduino = new Arduino('dummy','dummy','dummy','');
  constructor() { }

  ngOnInit() {
  }

}
