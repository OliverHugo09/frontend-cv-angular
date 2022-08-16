import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUser } from 'src/app/models/login/app-user';
import { AppUserAuth } from 'src/app/models/login/app-user-auth';
import { SecurityService } from 'src/app/service/login/security.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl = '/admin';
  errorMessage = '';

  constructor(
    private service: SecurityService,
    private router: Router,
  ) {}


  ngOnInit(): void {}

  login(){
    this.errorMessage = '';
    this.service.login(this.user).subscribe(
      resp =>{
        this.securityObject = resp;
        this.router.navigateByUrl(this.returnUrl);
      }
    ),
    error => this.errorMessage = error
  }



// export class LoginComponent implements OnInit, OnDestroy {
//   formLogin: FormGroup;
//   subRef$: Subscription;

//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//     private router: Router,
//   ) {
//     this.formLogin = formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//    }

//   ngOnInit(): void {
//   }

//   Login(){
//     const usernameLogin: ILogin = {
//       username: this.formLogin.value.username,
//       password: this.formLogin.value.password,
//     };

//     this.subRef$ = this.http.post<any>('http://localhost:3000/login',
//       usernameLogin,{ observe: 'response' })
//       .subscribe(res => {
//         const token = res.body;
//         console.log(token)
//         sessionStorage.setItem('token',token);
//         this.router.navigate(['/admin']);
//       }, err => { console.log('Error en el login', err);  });
//   }

//   ngOnDestroy() {
//     if (this.subRef$){
//       this.subRef$.unsubscribe();
//     }
//   }

}
