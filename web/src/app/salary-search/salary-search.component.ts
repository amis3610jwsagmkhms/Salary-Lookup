import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Salary } from '../salaries/salary';
import { SalariesService } from '../salaries/salaries.service'; 

@Component({
  selector: 'app-salary-search',
  templateUrl: './salary-search.component.html',
  styleUrls: ['./salary-search.component.css']
})
export class SalarySearchComponent implements OnInit {

  salaries$: Observable<Salary[]>;
  private searchTerms = new Subject<string>();

  constructor(private salariesService: SalariesService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term); 
  }

  ngOnInit(): void {
    this.salaries$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
      debounceTime(300),

            // ignore new term if same as previous term
      distinctUntilChanged(),
            // switch to new search observable each time the term changes
      switchMap((term: string) => this.salariesService.searchSalaries(term))
    );
  }
}
