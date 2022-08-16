import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { AppUser } from 'src/app/models/login/app-user';
import { AppUserAuth } from 'src/app/models/login/app-user-auth';

const API_URL = 'http://localhost:3000/'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) { }

  resetSecuriryObject(){
    this.securityObject.username = '';
    this.securityObject.token = '';
    this.securityObject.isAuthenticated = false;

  }

  login(entity:AppUser){

    this.resetSecuriryObject();

    return this.http.post(`${API_URL}login`,entity,httpOptions)
    .pipe(
      tap((resp: AppUserAuth)=>{
        Object.assign(this.securityObject, resp);
        sessionStorage.setItem('token',this.securityObject.token);
      }),
      catchError(this.handleError)
    )
  }

  logout(){
    this.resetSecuriryObject();
    sessionStorage.removeItem('token');
  }

  handleError(err:any){
    return throwError(err.error);
  }
}
