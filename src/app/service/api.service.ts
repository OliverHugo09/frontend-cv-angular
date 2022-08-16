import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token: string;
  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }

  private getToken():string{
    if(!this.token){
      this.token=sessionStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;

   }
}
