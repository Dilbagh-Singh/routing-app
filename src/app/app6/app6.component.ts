import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app6',
  templateUrl: './app6.component.html',
  styleUrls: ['./app6.component.scss']
})
export class App6Component {

  listArray : string[] = [];
  sum = 20;
  direction = "";

  constructor() {
    this.appendItems();
  }


  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    this.sum += 20;
    this.appendItems();
    
    this.direction = "scroll down";
  }

  appendItems() {
    this.addItems("push");
  }

  clickedButton(event: any) {
    alert(event.target.innerHTML + ' clicked');
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if( _method === 'push'){
        this.listArray.push([i].join(""));
      }
    }
  }
}
