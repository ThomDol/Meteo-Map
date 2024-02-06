import { Component, Injectable, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';

import { ApiBanService } from '../service/api-ban.service';



@Component({
  selector: 'app-localisation',
  standalone: true,
  imports: [],
  templateUrl: './localisation.component.html',
  styleUrl: './localisation.component.css'
})

export class LocalisationComponent implements OnChanges {
  public ville: string = '';
  constructor(private apiBanService:ApiBanService){} ;



  ngOnChanges(changes: SimpleChanges): void {
    
    throw new Error('Method not implemented.');
  }


}
