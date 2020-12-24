import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  private baseURL = 'http://localhost:8080/empapp/employee';

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}`, employee);

}
getEmployeeById(id: number): Observable<Employee> {
  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
}
deleteEmployee(id: number): Observable<Employee> {
  return this.httpClient.delete<Employee>(`${this.baseURL}/${id}`);
}
}
