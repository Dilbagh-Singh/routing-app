// import { Component, OnInit } from '@angular/core';
// import UsersJson from './users.json';

// @Component({
//   selector: 'app-tables',
//   templateUrl: './tables.component.html',
//   styleUrls: ['./tables.component.scss']
// })
// export class TablesComponent {

//   public Users:{id: Number,
//     name: String,
//     username: String,
//     email: String}[] = UsersJson;
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [
  ]
})
export class TablesComponent implements OnInit {
  public dataList: Array<IEmployee> = [
    {
      employeeId: 101,
      employeeName: 'Cristiano Jr',
      employeeAge: 23,
      employeeDOB: '09/03/1997'

    }, {
      employeeId: 102,
      employeeName: 'Neymar Jr',
      employeeAge: 20,
      employeeDOB: '03/08/2000'

    },
    {
      employeeId: 103,
      employeeName: 'Toni Kroos',
      employeeAge: 25,
      employeeDOB: '01/04/1995'

    },
    {
      employeeId: 104,
      employeeName: 'Mark John',
      employeeAge: 20,
      employeeDOB: '03/03/2000'

    }, {
      employeeId: 105,
      employeeName: 'Simon Robert',
      employeeAge: 24,
      employeeDOB: '03/08/1996'

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}


export interface IEmployee {

  employeeId: number;
  employeeName: string;
  employeeAge: number;
  employeeDOB: string;

}
