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

constructor(private apiWeatherService : ApiWeatherService){}
  ngOnInit(): void {
    this.apiWeatherService.getWeatherDescript().subscribe((meteo:any)=>{this.meteo=meteo;});
    throw new Error('Method not implemented.');
  }





}