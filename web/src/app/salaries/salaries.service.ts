import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { catchError, map, tap } from 'rxjs/operators';

import { Salary } from './salary';

@Injectable({
  providedIn: 'root'
})
export class SalariesService {
  
  private salariesUrl = 'https://localhost:5001/api/search/';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T); 
    };
  }

  constructor(private http: HttpClient) {}

  // Gets all of the salaries from the API
  getSalaries() {
    return this.http.get<Salary[]>(this.salariesUrl).pipe(
      tap(_ => console.log('fetched salaries')), 
      catchError(this.handleError<Salary[]>('getSalaries', []))
    );
  }
}

/**
 * Below: Mock Salaries service
 */


// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// import { Salary } from './salary';
// import { SALARIES } from './mock-salaries';

// @Injectable({
//   providedIn: 'root',
// })
// export class SalariesService {

//   constructor() { }

//   getSalaries(): Observable<Salary[]> {
//     return of(SALARIES);
//   }

// }