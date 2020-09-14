import { Estudiante } from './../_model/Estudiante';
import { HOST, TOKEN_NAME } from './../_shared/var.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ApoderadoService{

    url: string = `${HOST}/apoderado`

    constructor(private http: HttpClient){   
    }

    getApoderadoById(id: number){
        let access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).token;
        return this.http.get<Estudiante>(`${this.url}/listar/${id}`,{
            headers: new HttpHeaders().set('Authorization', `Bearer ${access_token}`).set('Content-Type', 'application/json')
        });
    }
   
   
}