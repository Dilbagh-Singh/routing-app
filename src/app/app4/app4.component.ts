import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.scss']
})
export class App4Component implements OnInit {
  constructor(private data: DataService) { }

  name = 'Angular 6';
  timeLeft: number = 0;
  interval: any;
  interval1: any;
  transmit = '';
  timestamps: {msg: string, hits: number}[] = [];
  ispaused = false;

  @ViewChild('fondovalor')
  fondovalor!: ElementRef;

  startTimer() {
    clearInterval(this.interval);
    this.timeLeft = this.fondovalor.nativeElement.value;
      this.interval = setInterval(() => {
        if(this.timeLeft > 0 && !this.ispaused) {
          this.timeLeft--;
        } else {
          console.log("Time over");
        }
      },1000)
    
  }

  pauseTimer() {
    this.ispaused = !this.ispaused;
    if (this.ispaused) {
      this.data.changeMessage('Timer paused at ' + this.timeLeft, this.timestamps.length);
      console.log(this.data.returnData());
    } else {
      this.data.changeMessage('Timer resumed at ' + this.timeLeft, this.timestamps.length);
      console.log(this.data.returnData());
      //console.log(this.timestamps);
      //this.timestamps.push('timer resumed at' + this.timeLeft);
    }
    //clearInterval(this.interval);
  }

  message!: string;
  subscription!: Subscription;

  

  ngOnInit() {
    this.timestamps = this.data.timestamps;
    console.log(this.timestamps.length);
  }
}
