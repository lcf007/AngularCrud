import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getEmployeeNameAndGender(): string{
    return this.employee.name + " " + this.employee.gender;
  }

  handleClick(){
    this.notify.emit(Employee);
    console.log("Clicked: " + Employee.name);
  }

}
