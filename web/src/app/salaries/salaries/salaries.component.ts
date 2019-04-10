import { Component, OnInit } from '@angular/core';
import { Salary } from '../salary'

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  salaries: Salary[] = [
    {
      Last_Name : "Scott", 
      First_Name : "Michael", 
      Middle_Name : "Garrett", 
      Vp_College : "College of Business", 
      Department : "Sales", 
      Organization : "Dunder Mifflin Paper Co.",
      Title : "Regional Manager", 
      Annual_Base_Salary : 75000.00, 
      Hourly_Rate : 28.00, 
      Id : 1, 
      Sex : 'M', 
      Race : "White", 
      Ethnicity : "Non Hispanic or Latino", 
      Spirit_Animal : "Grasshopper"
    },
    {
      Last_Name : "Heyn", 
      First_Name : "Kal", 
      Middle_Name : "E", 
      Vp_College : "College of Business", 
      Department : "MIS", 
      Organization : "AMIS 3610 Group",
      Title : "Software Developer", 
      Annual_Base_Salary : 100, 
      Hourly_Rate : 0.25, 
      Id : 2, 
      Sex : 'M', 
      Race : "White", 
      Ethnicity : "Non Hispanic or Latino", 
      Spirit_Animal : "Sea Sponge"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
