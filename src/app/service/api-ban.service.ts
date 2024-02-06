import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBanService {
  
  res! : Observable<any>;

  public urlApiBan = "https://api-adresse.data.gouv.fr/search/?q=postcode=";

  constructor(private http:HttpClient) { }

  saveData(value:any):Observable<any>{
    console.log("requete effectue");
    return this.http.get(this.urlApiBan+value);
     
  }

 
}
