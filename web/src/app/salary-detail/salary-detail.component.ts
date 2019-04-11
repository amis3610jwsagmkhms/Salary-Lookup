import { Component, OnInit, Input } from '@angular/core';
import { Salary } from '../salaries/salary';
import { SalariesService } from '../salaries/salaries.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrls: ['./salary-detail.component.css']
})
export class SalaryDetailComponent implements OnInit {

  @Input() salary: Salary; 

  constructor(
      private salariesService: SalariesService, 
      private route: ActivatedRoute, 
      private location: Location
    ) { }

  ngOnInit(): void {
    this.getSalary()
  }

  getSalary(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salariesService.getSalary(id)
      .subscribe(salary => this.salary = salary);
  }

  goBack(): void {
    this.location.back();
  }

}
