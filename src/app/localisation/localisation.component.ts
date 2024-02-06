import { Component } from '@angular/core';

import { ApiBanService } from '../service/api-ban.service';



@Component({
  selector: 'app-localisation',
  standalone: true,
  imports: [],
  templateUrl: './localisation.component.html',
  styleUrl: './localisation.component.css'
})



export class LocalisationComponent {
public ville:any;

constructor(private apiBanService:ApiBanService){}


ngOnInit(): void {
  console.log("res :"+this.apiBanService.res);
 this.ville=this.apiBanService.res;
  }


}
