import { TOKEN_NAME } from './../../../_shared/var.constant';
import { Estudiante } from './../../../_model/Estudiante';
import { EstudianteService } from './../../../_service/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-inicio',
  templateUrl: './estudiante-inicio.component.html',
  styleUrls: ['./estudiante-inicio.component.css']
})
export class EstudianteInicioComponent implements OnInit {

  id: number;
  estudiante = new Estudiante();
  
  

  constructor(private estudianteService: EstudianteService, private router: Router) {
    
   }

  ngOnInit(): void {

    let currentUser= JSON.parse(sessionStorage.getItem(TOKEN_NAME));
    if(currentUser != null){
      if(currentUser['authority']=='ROLE_ESTUDIANTE'){
        this.id=currentUser['id_entity'];
        this.initPage();
      }else{
        this.redirigir(currentUser['authority']);
      }
      
    } else{
      this.router.navigate(['login']);
    }

  }

  private initPage(){
    this.estudianteService.getEstudianteById(this.id).subscribe(data =>{
      this.estudiante=data;
      console.log(this.estudiante)
    }, (err)=>{
      this.router.navigate(['login']);
    }
    );
  }


  redirigir(auth: string){
    switch (auth) {
      case 'ROLE_ESTUDIANTE':
        this.router.navigate(['estudiante']);
        break;
      case 'ROLE_DOCENTE':
        this.router.navigate(['docente']);
        break;
      case 'ROLE_APODERADO':
        this.router.navigate(['apoderado']);
        break;
    }
  }


}
