import {Component, OnInit, Input} from '@angular/core';
import {Arduino} from './arduino';
import {ArduinoListComponent} from './arduino-list/arduino-list.component';
@Component({
  selector: 'app-arduino-item',
  templateUrl: './arduino-item.component.html'

})
export class ArduinoItemComponent implements OnInit {
 @Input() arduino: Arduino;
  arduinoId: number;
  constructor() { }

  ngOnInit() {
  }

}
