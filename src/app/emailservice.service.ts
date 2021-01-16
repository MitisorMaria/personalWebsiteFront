import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


export interface PostResponse {
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
  private apiurl = 'http://localhost:8080/email';

  constructor(private http: HttpClient) { }


  sendEmail(data) {
      return this.http.post<PostResponse>(this.apiurl, data);
  }

}
