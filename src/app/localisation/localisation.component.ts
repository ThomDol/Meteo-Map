import { Component, Injectable, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';

import { ApiBanService } from '../service/api-ban.service';
import { ApiWeatherService } from '../service/api-weather.service';



@Component({
  selector: 'app-localisation',
  standalone: true,
  imports: [],
  templateUrl: './localisation.component.html',
  styleUrl: './localisation.component.css'
})

export class LocalisationComponent implements OnInit {
  public ville: any;
  public coordX : any;
  public coordY : any;


  constructor(private apiBanService:ApiBanService,private apiWeatherService:ApiWeatherService){} ;

ngOnInit(): void {
    console.log("check");
    this.apiBanService.getResVilleSubject().subscribe((ville: any) => {
      this.ville = ville;
      this.apiWeatherService.saveData(ville).subscribe((data:any)=>{
        this.apiWeatherService.setWeatherDescript(data.weather[0].description);
        console.log("requete weather faite"),
        this.apiWeatherService.setTemperature(data.main.temp),
        console.log("requete temperature faite");
                });
    });
    this.apiBanService.getResCoordXSubject().subscribe((coordX: any) => {
      this.coordX = coordX;
    console.log("long recuperee")});
    this.apiBanService.getResCoordYSubject().subscribe((coordY: any) => {
        this.coordY = coordY;});
    
    }
    
  }



  



