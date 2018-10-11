import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: new Date(2018,8,8),
    department: '-1',
    isActive: null,
    photoPath: null,
  }
  previewPhoto: boolean = false;
  dateOfBirth: Date = new Date(2018,8,8);
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},
  ];

  constructor( private _employeeService: EmployeeService,
    private _router: Router ) {
    this.datePickerConfig = Object.assign({},
      { containerClass: 'theme-dark-blue',
    });
   }

  ngOnInit() {
  }

  saveEmployee(): void {
    console.log(this.employee);
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
