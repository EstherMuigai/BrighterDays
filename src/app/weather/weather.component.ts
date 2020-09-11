import { Component, OnInit } from '@angular/core';
//import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    //private api:ApiService
  ) { }

  ngOnInit(): void {
    const data = from(fetch(`${environment.currentWeatherApi}Nairobi&appid=${environment.weatherToken}`));

    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }

}
