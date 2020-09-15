import { Apoderado } from 'src/app/_model/Apoderado';
import { RegistroApoderadoRequest } from './../_model/RegistroApoderadoRequest';
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
        return this.http.get<Apoderado>(`${this.url}/listar/${id}`,{
            headers: new HttpHeaders().set('Authorization', `Bearer ${access_token}`).set('Content-Type', 'application/json')
        });
    }

    registrarApoderadoUsuario(registroApoderadoRequest: RegistroApoderadoRequest){

        return this.http.post(`${this.url}/registrarapoderadousuario`, registroApoderadoRequest ,{
            headers: {
                'content-type':"application/json"
            }
        });
        
    }
   
   
}