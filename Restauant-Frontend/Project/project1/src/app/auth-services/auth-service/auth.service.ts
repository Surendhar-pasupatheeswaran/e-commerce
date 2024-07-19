import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASICURL=["http://localhost:8080/"];

  constructor(private http:HttpClient) { }

  signup(signuprequest:any):Observable<any>{
    return this.http.post(`${this.BASICURL}`+"signup",signuprequest);
  }

  login(loginrequest:any):Observable<any>{
    return this.http.post(`${this.BASICURL}`+"login",loginrequest);
  }
}

