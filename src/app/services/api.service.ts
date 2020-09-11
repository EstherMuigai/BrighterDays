import { Injectable } from '@angular/core';
import { HttpClient,HttpClientJsonpModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = environment.weatherToken;
  weatherApi = environment.currentWeatherApi;
  forecastApi = environment.thirtyDayForecastApi;
  
  constructor(
    private http:HttpClient,
    private jsonp:HttpClientJsonpModule
  ) { }

  getWeather(place) {
    this.http.jsonp(`${this.weatherApi}${place}&appid=${this.token}`, 'callback')
    .pipe(
      catchError((err) => { return throwError(err);}),
    ).subscribe(data => {
      console.log(data)
      return JSON.stringify(data)
    });
  }

  
}
