import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model';
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {

  }

  baseUrl = 'http://localhost:3000/employees';

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Error: ', errorResponse.error.message);
    } else {
      console.error('Server Error: ', errorResponse);
    }
    return throwError('There is a problem with the service.');
  }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  getEmployee(id: number): Observable<Employee> {
    return this._httpClient.get<Employee>(`${this.baseUrl}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this._httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<void>{
    return this._httpClient.delete<void>(`${this.baseUrl}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

}
