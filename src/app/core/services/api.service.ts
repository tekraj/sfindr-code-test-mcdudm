import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAPIResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers: any;
  
  private baseUrl = 'https://api.mocki.io/v1/';
  
  constructor(
    private http: HttpClient,
  ) {
    this.setHeaders();
  }
  private setHeaders() {
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: ''
      })
    };
  }

  getMockAPIData(): Observable<IAPIResponse>{
     return this.http.get(`${this.baseUrl}1e0ec2a9`, this.headers).pipe(map((response: any) => response as IAPIResponse));
  }

}
