import { Component, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-timer-display',
    templateUrl: './timer-display.component.html',
    styleUrls: ['./timer-display.component.scss']
  })
export class TimerDisplayComponent {
  name = 'Angular 6';
  timeLeft!: number;
  interval: any;
  interval1: any;
  transmit = '';
  timestamps:string[] = [];
  ispaused = false;

  @ViewChild('fondovalor')
  fondovalor!: ElementRef;
  startTimer() {
    clearInterval(this.interval);
    this.timestamps = [];
    this.ispaused = false;
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
    console.log(this.ispaused);
    if (this.ispaused) {
      this.timestamps.push('Timer paused at' + this.timeLeft);
    } else {
      this.timestamps.push('timer resumed at' + this.timeLeft);
    }
    
    console.log(this.timestamps);
  }
}