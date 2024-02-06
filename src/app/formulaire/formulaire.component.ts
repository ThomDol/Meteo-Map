import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
  
})

@Injectable()

export class FormulaireComponent {
 
constructor(private http:HttpClient){}

public urlApiBan = "https://api-adresse.data.gouv.fr/search/?q=postcode=";

public renvoi:any;  

public postCode = new FormControl('');

display(){
  return(this.http.get(this.urlApiBan+this.postCode.value).
  subscribe(data=>{

    
  })
  
  
  )
}

}
