import { Component, Injectable } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { ApiBanService } from '../service/api-ban.service';
import { LocalisationComponent } from '../localisation/localisation.component';



@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule,LocalisationComponent],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
  
})



export class FormulaireComponent {

constructor(private apiBanService:ApiBanService){};


public renvoi:any;  

public postCode = new FormControl('');

stockData():void{

  this.apiBanService.saveData(this.postCode.value).
  subscribe((data:any)=>{
    this.apiBanService.setResVille(data.features[0].properties.city),
    this.apiBanService.setResCoordX(data.features[2].geometry.coordinates[0]),
    this.apiBanService.setResCoordY(data.features[2].geometry.coordinates[1]);
    
    
    
    });}
    
    
    


  
  
  
  
}


