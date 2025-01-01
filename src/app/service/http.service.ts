import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiKey = '7dfc32dea1a16cde9c35e3b58bc4d482';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http:HttpClient) {}

  searchWeather(city:string):Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
