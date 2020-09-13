import { Estudiante } from './../_model/Estudiante';
import { HOST } from './../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EstudianteService{

    url: string = `${HOST}/estudiante`

    constructor(private http: HttpClient){   
    }

    getEstudiante(id: number){
        return this.http.get<Estudiante>(`${this.url}/listar/${id}`);
    }

   
}