import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  ) { }

  getWeather(place,lat,lon): Observable<any> {
    return this.http.get(`${this.weatherApi}${place},lat=${lat}&lon=${lon}&appid=${this.token}`)
      .pipe(
        catchError(() => throwError('error when retrieving hourly forecast'))
      );
  }



  
}
