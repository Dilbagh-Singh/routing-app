import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  colArray = [] as any;
  rowArray = [] as any;
  colums = 4;
  rows = 10;
  layingGrid:boolean = true;;
  setDimension(){
     this.colArray = [];
     this.rowArray = [];
     for(let i = 0; i<this.colums; i++){
       this.colArray.push(i);
     }
     for(let i = 0; i<this.rows; i++){
       this.rowArray.push(i);
     }
   }

   selectOption(event: any) {
    console.log(event.target.options.selectedIndex);
    console.log(this.layingGrid);
     if (event.target.options.selectedIndex === 1) {
        this.layingGrid = false;
        console.log(this.layingGrid);
     } 
     if (event.target.options.selectedIndex === 0) {
        this.layingGrid = true;
        console.log(this.layingGrid);
     }
   }

  constructor() { }

  ngOnInit(): void {
  }

}
