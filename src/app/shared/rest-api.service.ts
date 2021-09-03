
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from './stock';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  //apiURL = 'http://team4d-team4d.punedevopsa56.conygre.com/api/stocks/';
    apiURL="http://localhost:8080/api/stocks/"
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method 
  getStocks(): Observable<Stock> {
    return this.http.get<Stock>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

    // HttpClient API getPortfolio() method 
    getPortfolio(): Observable<Stock> {
      return this.http.get<Stock>(`${this.apiURL}portfolio`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

  // HttpClient API get() method 
  getStockVolume(tickerName:any): Observable<number> {
    return this.http.get<number>(this.apiURL +"getTicker/"+ tickerName)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // Fetch Stock data 
  getStockValue(stkName:any): Observable<number> {
    return this.http.get<number>(this.apiURL + "stkPrice/" + stkName)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  sortBy(name:string): Observable<Stock> {
    return this.http.get<Stock>(this.apiURL+"sortby"+name)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API post() method 
  createStock(stock:Stock): Observable<Stock> {
    return this.http.post<Stock>(this.apiURL + '', JSON.stringify(stock), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

  // HttpClient API put() method
  updateStock(id:number, stock:Stock): Observable<Stock> {
    return this.http.put<Stock>(this.apiURL, JSON.stringify(stock), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method 
//   deleteStock(id:number){
//     return this.http.delete<Shipper>(this.apiURL + id, this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   }

  // Error handling 
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
}