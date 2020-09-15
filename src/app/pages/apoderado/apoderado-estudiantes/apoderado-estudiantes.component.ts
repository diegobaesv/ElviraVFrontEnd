import { TOKEN_NAME } from './../../../_shared/var.constant';
import { Router } from '@angular/router';
import { ApoderadoService } from './../../../_service/apoderado.service';
import { Apoderado } from 'src/app/_model/Apoderado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoderado-estudiantes',
  templateUrl: './apoderado-estudiantes.component.html',
  styleUrls: ['./apoderado-estudiantes.component.css']
})
export class ApoderadoEstudiantesComponent implements OnInit {

  apoderado: Apoderado;
  id: number;

  constructor(private apoderadoService : ApoderadoService, private router:Router) { }

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
    this.apoderadoService.getApoderadoById(this.id).subscribe(data =>{
      this.apoderado=data;
    });
  }


}
