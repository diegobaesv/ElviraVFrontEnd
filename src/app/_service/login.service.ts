import { Router } from '@angular/router';
import { HOST } from './../_shared/var.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoginService{

    url: string = `${HOST}/login`;
   

    constructor(private http: HttpClient){   

    }

    login(user: string, pass: string){
        const body = {username: user, password: pass};

     return this.http.post( `${this.url}/signin`, body, {
         headers: {
             'content-type':"application/json"
         }
     });
        
    }

    registroApoderado

   
}