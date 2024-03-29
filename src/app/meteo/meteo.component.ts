import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from '../service/api-weather.service';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit {
public meteo:any;
public temperature!:number;

constructor(private apiWeatherService : ApiWeatherService){}
  ngOnInit(): void {
    this.apiWeatherService.getWeatherDescript().subscribe((meteo:any)=>{this.meteo="http://openweathermap.org/img/w/"+meteo+".png";});
    this.apiWeatherService.getTemperature().subscribe((temperature:any)=>{this.temperature=temperature;});
    throw new Error('Method not implemented.');
  }





}