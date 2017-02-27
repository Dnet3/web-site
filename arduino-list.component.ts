import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Arduino} from "../arduino";


@Component({
  selector: 'app-arduino-list',
  templateUrl: './arduino-list.component.html'

})
export class ArduinoListComponent implements OnInit {
  arduinos: Arduino[] = [];
  @Output() arduinoSelected = new EventEmitter<Arduino>();
  arduino = new Arduino('dummy','dummy','dummy','../assets/images/dell.jpg','dummy','dummy','dummy','dummy','dummy');
  constructor() { }

  ngOnInit() {
  }

  onSelected(arduino: Arduino){
    this.arduinoSelected.emit(arduino);
    event.preventDefault();
  }



}
