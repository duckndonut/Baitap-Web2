import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Fashion } from '../models/Fashion';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private _http: HttpClient) { }

  getListStyles(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type",
      "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/fashions/get/liststyle", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<string>),
      retry(3),
      catchError(this.handleError))
  }

  getFashions(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type",
      "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/fashions", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  getFashionById(fashionId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type",
      "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/fashions/" + fashionId, requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError))
  }

  getFashionsByStyle(style: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type",
      "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }

    return this._http.get<any>("/fashions/style/" + style, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError))
  }
}
