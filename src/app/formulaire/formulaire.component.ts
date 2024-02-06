import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
  
})
export class FormulaireComponent {

public renvoi:any;  

public postCode = new FormControl('');

display(){
  this.renvoi=this.postCode.value;
}

}
