import { TOKEN_NAME } from './../../../_shared/var.constant';
import { Estudiante } from './../../../_model/Estudiante';
import { Router } from '@angular/router';
import { EstudianteService } from './../../../_service/estudiante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {
  id: number;
  estudiante = new Estudiante();

  constructor(private estudianteService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
    let currentUser= JSON.parse(sessionStorage.getItem(TOKEN_NAME));
    if(currentUser != null){
      this.id=currentUser['id_entity'];
      this.initPage();
    } else{
      this.router.navigate(['login']);
    }

  }

  private initPage(){
    this.estudianteService.getEstudianteById(this.id).subscribe(data =>{
      this.estudiante=data;
    });
  }
 


}
