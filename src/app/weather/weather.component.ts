import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => { 
      this.getWeather('',position.coords.latitude,position.coords.longitude)
    });
  }

  getWeather(place,lat,lon){
    this.api.getWeather(place,lat,lon).subscribe((res:any)=>{
      console.log(res)
    }); 
  }

}
