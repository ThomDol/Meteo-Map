import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalisationComponent} from './localisation/localisation.component';
import { MeteoComponent } from './meteo/meteo.component';
import { CarteComponent } from './carte/carte.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule,LocalisationComponent,MeteoComponent,CarteComponent,FormulaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'locMeteo';
}
