import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ApiWeatherService {
  public urlWeather ="https://api.openweathermap.org/data/2.5/weather?q=";
  

  private weatherDescript : Subject<any> = new Subject<any>;

  setWeatherDescript (value:any){
    this.weatherDescript.next(value);
  }

  getWeatherDescript(){
    return this.weatherDescript.asObservable();
  }

  constructor(private http : HttpClient) { }


  saveData(value:any):Observable<any>{
    console.log("requete effectue");
    return this.http.get(this.urlWeather+value+",fr&APPID=c6d95fe0c1ce7fa84a6cddfe533bfd94");
    
    }
}
