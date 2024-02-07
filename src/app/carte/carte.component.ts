import { Component, OnInit } from '@angular/core';
import { ApiBanService } from '../service/api-ban.service';
import * as L from 'leaflet';


@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent implements OnInit {
  public longitude :any = 0.68484;
  public latitude:any=47.394144;
  public map :any;
  
  constructor(private apiBanService:ApiBanService){
    
  }


  ngOnInit(): void {
    this.initMap();
    this.apiBanService.getResCoordXSubject().subscribe((data: any) => {
      this.longitude = data;
      this.updateMap();
    });
    this.apiBanService.getResCoordYSubject().subscribe((data: any) => {
      this.latitude = data;
      this.updateMap();
    });
  }

  initMap(): void {
    this.map = L.map('map').setView([this.latitude, this.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    L.marker([this.latitude, this.longitude]).addTo(this.map);
  }

  updateMap(): void {
    if (this.map) {
      this.map.setView([this.latitude, this.longitude], 13);
      const marker = L.marker([this.latitude, this.longitude]);
      this.map.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          layer.remove();
        }
      });
      marker.addTo(this.map);
    }
  }

}
