import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  public timestamps = [{msg: 'Time stamp records', hits: 0}];

  constructor() { }

  changeMessage(message: any, hit:number) {
    this.timestamps.push({msg:message, hits:hit});
  }

  returnData() {
    return this.timestamps;
  }

}