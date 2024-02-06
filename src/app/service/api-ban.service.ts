import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBanService {
  public urlApiBan = "https://api-adresse.data.gouv.fr/search/?q=postcode=";
  private resVille : any;
  private resCoordX:any;
  private resCoordY:any;
  

  constructor(private http:HttpClient) { }
  
  setResVille(value:any){this.resVille=value;}
  setResCoordX(value:any){this.resCoordX=value;}
  setResCoordY(value:any){this.resCoordY=value;}

  getResVille(){return this.resVille;}
  getResCoordX(){return this.resCoordX;}
  getResCoordY(){return this.resCoordY;}

  

  

  saveData(value:any):Observable<any>{
    console.log("requete effectue");
    return this.http.get(this.urlApiBan+value)
    
    }
    
  }


