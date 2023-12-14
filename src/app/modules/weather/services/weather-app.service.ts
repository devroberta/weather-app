import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  private apiKey = enviroment.apiKey;

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: String): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
}
