import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deptlist',
  template: `
  <ul class="item">
  <li (click)="onSelect(department)"  *ngFor="let department of departments">
    <span class="badge">{{department.id}}</span> {{department.name}}
  </li>
</ul>
  `,
  styles: []
})
export class CategoryComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private rounter: Router) { }

  ngOnInit() {

  }

  onSelect(department){
    // from neviate from code to rooute we need router service
    this.rounter.navigate(['/departments', department.id]);
  }
}

