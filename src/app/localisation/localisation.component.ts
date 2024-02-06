import { Component, Injectable, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';

import { ApiBanService } from '../service/api-ban.service';



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


  constructor(private apiBanService:ApiBanService){} ;

 ngOnInit(): void {
    console.log("check");
    this.apiBanService.getResVilleSubject().subscribe((ville: any) => {
      this.ville = ville;});
    this.apiBanService.getResCoordXSubject().subscribe((coordX: any) => {
      this.coordX = coordX;});
    this.apiBanService.getResCoordYSubject().subscribe((coordY: any) => {
        this.coordY = coordY;});
  }
    
  }



  



