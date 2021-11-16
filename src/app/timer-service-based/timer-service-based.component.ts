import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-service-based',
  templateUrl: './timer-service-based.component.html',
  styleUrls: ['./timer-service-based.component.scss']
})
export class TimerServiceBasedComponent {

  @Input()
  time!: { msg: string; hits: number;};
  subscription!: Subscription;

  constructor(private data: DataService) { }

}
