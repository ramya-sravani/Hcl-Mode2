import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: any[] = [
  {
  code: 'emp101', name: 'Ramya', gender: 'Female',
  annualSalary: 23000, dateOfBirth: '28/7/1998'
  },
  {
  code: 'emp102', name: 'Baby', gender: 'Male',
  annualSalary: 50000.95, dateOfBirth: '23/3/1998'
  },
  {
  code: 'emp103', name: 'Extra', gender: 'Male',
  annualSalary: 59000, dateOfBirth: '12/8/1999'
  },
  {
  code: 'emp104', name: 'Frooty', gender: 'Female',
  annualSalary: 65000.826, dateOfBirth: '14/10/1997'
  },
  ];
}
