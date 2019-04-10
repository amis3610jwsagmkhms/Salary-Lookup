import { Component, OnInit, Input } from '@angular/core';
import { Salary } from '../salary'

@Component({
  selector: 'app-salary-row',
  templateUrl: './salary-row.component.html',
  styleUrls: ['./salary-row.component.css']
})
export class SalaryRowComponent implements OnInit {

  constructor() { }

  @Input() salary: any;

  ngOnInit() {
  }

}
