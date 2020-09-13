import { ActivatedRoute, Params } from '@angular/router';
import { EstudianteService } from './../../../_service/estudiante.service';
import { Estudiante } from './../../../_model/Estudiante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante-perfil',
  templateUrl: './estudiante-perfil.component.html',
  styleUrls: ['./estudiante-perfil.component.css']
})
export class EstudiantePerfilComponent implements OnInit {

  id: number;
  estudiante = new Estudiante();

  constructor(private estudianteService: EstudianteService,private route: ActivatedRoute) {
    
  }

 ngOnInit(): void {
   this.route.params.subscribe((params: Params) => {
     this.id=params['id'];
     this.initPage();
   });
 }


 private initPage(){
   this.estudianteService.getEstudiante(this.id).subscribe(data =>{
     this.estudiante=data;
   });
 }

}
