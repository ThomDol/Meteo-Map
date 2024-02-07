import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable()

export class ApiBanService {
  public urlApiBan = "https://api-adresse.data.gouv.fr/search/?q=postcode=";
  
  
  private resVilleSubject: Subject<any> = new Subject<any>();
  private resCoordXSubject : Subject<number> = new Subject<number>();
  private resCoordYSubject : Subject<number> = new Subject<number>();
  

  constructor(private http:HttpClient) { }
  
  setResVille(value:any){this.resVilleSubject.next(value);}
  setResCoordX(value:any){this.resCoordXSubject.next(value);}
  setResCoordY(value:any){this.resCoordYSubject.next(value);}
  

  
  getResCoordXSubject():Observable<number> {
    return this.resCoordXSubject.asObservable();
  }

  getResCoordYSubject():Observable<number> {
    return this.resCoordYSubject.asObservable();
  }

  getResVilleSubject(): Observable<any> {
    return this.resVilleSubject.asObservable();
  }

  
  

  saveData(value:any):Observable<any>{
    return this.http.get(this.urlApiBan+value)
    
    }
    
  }


