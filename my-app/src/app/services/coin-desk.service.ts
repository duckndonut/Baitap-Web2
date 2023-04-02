import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { ICoinDeskData } from '../models/ICoinDeskData';

@Injectable({
  providedIn: 'root'
})
export class CoinDeskService {
  private _url: string = '/bpi/currentprice.json'
  constructor(private _http: HttpClient) { }

  getCoinDeskData() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this. _http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res) as ICoinDeskData),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
