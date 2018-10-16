import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  filteredEmployees: Employee[];

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmoloyee(value);
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.employees = this._route.snapshot.data['employeeReslover'];
    this._route.queryParamMap.subscribe((params) => {
      if (params.has('searchTerm')) {
        this.searchTerm = params.get('searchTerm');
      } else {
        this.filteredEmployees = this.employees;
      }
    });
  }

  ngOnInit() {
  }

  filterEmoloyee(searchString: string): Employee[] {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}
