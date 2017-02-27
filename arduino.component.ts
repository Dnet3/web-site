import { Component, OnInit } from '@angular/core';
import {Arduino} from "./arduino";

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html'

})
export class ArduinoComponent implements OnInit {
  selectedArduino: Arduino;
  constructor() { }

  ngOnInit() {
  }

}
