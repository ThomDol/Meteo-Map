import { Component } from '@angular/core';
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
  public regex :any = new RegExp ('\\d{5}');
  postCodeHelpMessage: string = "";

constructor(private apiBanService:ApiBanService){};




public postCode = new FormControl('');

stockData():void{
  if(this.postCode.value){
  if(!this.regex.test(this.postCode.value) || this.postCode.value.length!=5){
    this.postCodeHelpMessage="Un code postal a 5 chiffres";
  }
  else{
  this.postCodeHelpMessage="";
  this.apiBanService.saveData(this.postCode.value).
  subscribe((data:any)=>{
    this.apiBanService.setResVille(data.features[0].properties.city),
    this.apiBanService.setResCoordX(data.features[2].geometry.coordinates[0]),
    this.apiBanService.setResCoordY(data.features[2].geometry.coordinates[1])
    ;});
  
  
  
  }

  
    
    
    


  
  
  
  
}
}
}

