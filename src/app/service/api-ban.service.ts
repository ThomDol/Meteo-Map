import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable()

export class ApiBanService {
  public urlApiBan = "https://api-adresse.data.gouv.fr/search/?q=postcode=";
  
  
  private resVilleSubject: Subject<any> = new Subject<any>();
  private resCoordXSubject : Subject<any> = new Subject<any>();
  private resCoordYSubject : Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }
  
  setResVille(value:any){this.resVilleSubject.next(value);}
  setResCoordX(value:any){this.resCoordXSubject.next(value);}
  setResCoordY(value:any){this.resCoordYSubject.next(value);}

  
  getResCoordXSubject():Observable<any> {
    return this.resCoordXSubject.asObservable();
  }

  getResCoordYSubject():Observable<any> {
    return this.resCoordYSubject.asObservable();
  }

  getResVilleSubject(): Observable<any> {
    return this.resVilleSubject.asObservable();
  }

  

  saveData(value:any):Observable<any>{
    console.log("requete effectue");
    return this.http.get(this.urlApiBan+value)
    
    }
    
  }


