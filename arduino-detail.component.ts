import {Component, OnInit, Input} from '@angular/core';
import {Arduino} from "../arduino";

@Component({
  selector: 'app-arduino-detail',
  templateUrl: './arduino-detail.component.html'

})
export class ArduinoDetailComponent implements OnInit {
  @Input() selectedArduino: Arduino;
  constructor() { }

  ngOnInit() {
  }

}
