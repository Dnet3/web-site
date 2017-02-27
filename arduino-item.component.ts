import {Component, OnInit, Input} from '@angular/core';
import {Arduino} from './arduino';
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