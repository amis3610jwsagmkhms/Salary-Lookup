import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  randomNumber = Math.floor((Math.random() * 22000) + 1);

  constructor() { }

  ngOnInit() {
  }

}
