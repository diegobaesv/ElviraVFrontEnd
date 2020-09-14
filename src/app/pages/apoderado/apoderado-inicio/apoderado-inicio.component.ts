import { Apoderado } from './../../../_model/Apoderado';
import { TOKEN_NAME } from './../../../_shared/var.constant';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoderado-inicio',
  templateUrl: './apoderado-inicio.component.html',
  styleUrls: ['./apoderado-inicio.component.css']
})
export class ApoderadoInicioComponent implements OnInit {

  id: number;
  apoderado=new Apoderado();


  constructor( private router: Router) { }

  ngOnInit(): void {

    let currentUser= JSON.parse(sessionStorage.getItem(TOKEN_NAME));
    if(currentUser != null){
      if(currentUser['authority']=='ROLE_APODERADO'){
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
