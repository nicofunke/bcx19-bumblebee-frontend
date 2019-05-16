import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-drone-countdown',
  templateUrl: './drone-countdown.component.html',
  styleUrls: ['./drone-countdown.component.scss']
})



export class DroneCountdownComponent implements OnInit {

  @ViewChild(CountdownComponent) counter: CountdownComponent;

  constructor() { }

  ngOnInit() {
  }

  resetTimer() {
    this.counter.restart();
    this.counter.stop();
    this.counter.pause();
    this.counter.resume();
  }

}
