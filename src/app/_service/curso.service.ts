import { Curso } from './../_model/Curso';
import { HOST, TOKEN_NAME } from './../_shared/var.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CursoService{

    url: string = `${HOST}/curso`

    constructor(private http: HttpClient){   
    }

    getCursoById(id: number){
        let access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).token;
        return this.http.get<Curso>(`${this.url}/listar/${id}`,{
            headers: new HttpHeaders().set('Authorization', `Bearer ${access_token}`).set('Content-Type', 'application/json')
        });
    }

  
   
}