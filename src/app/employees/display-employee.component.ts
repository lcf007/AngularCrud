import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  private _employee: Employee;
  @Input()
  set employee(val: Employee) {
    console.log("pre: " + ( this._employee ? this._employee.name:"Empty") );
    console.log("cur: " + val.name);
    this._employee = val;
   };
  get employee(): Employee { return this._employee; };

  constructor() { }

  ngOnInit() {
  }



}
