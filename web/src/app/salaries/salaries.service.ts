import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { catchError, map, tap } from 'rxjs/operators';

import { Salary } from './salary';

@Injectable({
  providedIn: 'root'
})
export class SalariesService {

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private salariesUrl = 'https://localhost:5001/api/search';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed: ${error.message}`); // log to console instead
      return of(result as T);  // Let the app keep running by returning an empty result.
    };
  }

  constructor(private http: HttpClient) {}

  // Gets all of the salaries from the API
  getSalaries() {
    return this.http.get<Salary[]>(this.salariesUrl).pipe( // this.http.get returns the body of the response as an untyped JSON object. Specifying the type, <Salary[]> gives a typed result object
      tap(_ => console.log('fetched salaries')), // taps the flow of observable values and sends a message (looks at observable values and does something with those values)
      catchError(this.handleError<Salary[]>('getSalaries', [])) // pipe extends the observable result to give it a catchError() operator. This intercepts observables that fail
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getSalary(id: number): Observable<Salary> { // server responds with a single salary rather than an array
    const url = `${this.salariesUrl}/${id}`; // constructs a request URL with the desired id
    return this.http.get<Salary>(url).pipe( 
      tap(_ => console.log(`fetched salary for id=${id}`)),
      catchError(this.handleError<Salary>(`getSalary id=${id}`))
    );
  }

  searchSalaries(term: string): Observable<Salary[]> {
    if(!term.trim()) { // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Salary[]>(`${this.salariesUrl}/?last_name=${term}'`).pipe(
      tap(_ => console.log(`found salaries matching "${term}`)),
      catchError(this.handleError<Salary[]>('searchSalaries',[]))
    )
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