import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';HttpClient



@Component({
  selector: 'app-localisation',
  standalone: true,
  imports: [],
  templateUrl: './localisation.component.html',
  styleUrl: './localisation.component.css'
})

@Injectable()

export class LocalisationComponent {
  constructor(private http:HttpClient){}

  public ville:any;
  public coord:any;


}
