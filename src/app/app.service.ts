import { CustomHttpClient } from './custom-http-client';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = "https://randomuser.me/api/"

  constructor(private http: CustomHttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.url);
  }

}
