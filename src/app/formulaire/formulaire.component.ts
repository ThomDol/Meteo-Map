import { Component, Injectable } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { ApiBanService } from '../service/api-ban.service';



@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
  
})

@Injectable()

export class FormulaireComponent {
 
constructor(private apiBanService:ApiBanService){}


public renvoi:any;  

public postCode = new FormControl('');

stockData():void{

  this.apiBanService.saveData(this.postCode.value).
  subscribe((data:any)=>{
    this.apiBanService.res=data.features[0].properties.city,
    console.log(data.features[0].properties.city),
    console.log(this.apiBanService.res)
    ;
    });
    


  
  
  
  
}

}
