import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { catchError, map, tap } from 'rxjs/operators';

import { Salary } from '../salary'
import { SalariesService } from '../salaries.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {
  
  salaries: Salary[];


  constructor(private salariesService: SalariesService) { }

  getSalaries(): void {
    this.salariesService.getSalaries()
      .subscribe(salaries => this.salaries = salaries);
  }

  ngOnInit() {
    this.getSalaries();
  }
}
