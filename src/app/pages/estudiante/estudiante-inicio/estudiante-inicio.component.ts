import { Estudiante } from './../../../_model/Estudiante';
import { EstudianteService } from './../../../_service/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-estudiante-inicio',
  templateUrl: './estudiante-inicio.component.html',
  styleUrls: ['./estudiante-inicio.component.css']
})
export class EstudianteInicioComponent implements OnInit {

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
