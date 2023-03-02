import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCountriesService {
  private url = "https://restcountries.com/v3.1"

  constructor(
    private http: HttpClient
  ) {
  }

  getUrl(): string {
    return this.url
  }

  getCountries(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(`${this.url}/all`, { headers })
  }

  getCountry(name: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(`${this.url}/name/${name}`, { headers })
  }

}
