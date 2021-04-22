import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: "body";
  params?: HttpParams | {};
  reportProcess?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  // get request
  public get<T>(
    endpoint: string,
    options?: IRequestOptions
  ): Observable<T> {
    return this.http.get<T>(endpoint, options);
  }

  // post request
  public post<T>(
    endpoint: string,
    params?: {},
    options?: IRequestOptions
  ): Observable<T> {
    return this.http.post<T>(endpoint, params, options);
  }

  // put request
  public put<T>(
    endpoint: string,
    params?: {},
    options?: IRequestOptions
  ): Observable<T> {
    return this.http.put<T>(endpoint, params, options);
  }

  // delete request
  public delete<T>(
    endpoint: string,
    options?: IRequestOptions
  ): Observable<T> {
    return this.http.delete<T>(endpoint, options);
  }
}