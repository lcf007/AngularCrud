import { PipeTransform, Pipe } from "@angular/core";
import { Employee } from "../models/employee.model";

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform{
  transform(employees: Employee[], searchTerm: string): Employee[]{
    if ( !employees || !searchTerm ){
      return employees;
    }
    return employees.filter( employee =>
      employee.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1
    );
  }
}
