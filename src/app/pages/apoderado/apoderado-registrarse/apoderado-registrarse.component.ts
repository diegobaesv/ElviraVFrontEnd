import { Usuario } from './../../../_model/Usuario';
import { RegistroApoderadoRequest } from './../../../_model/RegistroApoderadoRequest';
import { Router } from '@angular/router';
import { ApoderadoService } from './../../../_service/apoderado.service';
import { Component, OnInit } from '@angular/core';
import { Apoderado } from 'src/app/_model/Apoderado';

@Component({
  selector: 'app-apoderado-registrarse',
  templateUrl: './apoderado-registrarse.component.html',
  styleUrls: ['./apoderado-registrarse.component.css']
})
export class ApoderadoRegistrarseComponent implements OnInit {

  user: string;
  contrasena: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  dni: string;
  correo: string;
  telefono:  string;
  codigoAlumno1: string;
  codigoAlumno2: string;
  codigoAlumno3: string;

  usuario = new Usuario();
  apoderado= new Apoderado();
  codigosAlumnos: string[] = [];

  registroApoderadoRequest = new RegistroApoderadoRequest();
  
  constructor(private apoderadoService: ApoderadoService,private router: Router) { }

  ngOnInit(): void {
    this.registroApoderadoRequest.usuario = new Usuario();
    this.registroApoderadoRequest.apoderado = new Apoderado();

  }

  finalizarRegistro(){

    console.log(this.user);
    
    this.usuario.username = this.user;
    this.usuario.password=this.contrasena;
    this.usuario.authority="ROLE_APODERADO";
    this.usuario.enabled=true;

    this.apoderado.nombre=this.nombres;
    this.apoderado.apellidoMaterno=this.apellidoMaterno;
    this.apoderado.apellidoPaterno=this.apellidoPaterno;
    this.apoderado.correo=this.correo;
    this.apoderado.documentoIdentidad=this.dni;
    this.apoderado.telefono=this.telefono;
    this.apoderado.activo=true;

    if(this.codigoAlumno1!=null){
      this.codigosAlumnos.push(this.codigoAlumno1);
    }

    if(this.codigoAlumno2!=null){
      this.codigosAlumnos.push(this.codigoAlumno2);
    }

    if(this.codigoAlumno3!=null){
      this.codigosAlumnos.push(this.codigoAlumno3);
    }
    
    this.registroApoderadoRequest.apoderado = this.apoderado;
    this.registroApoderadoRequest.usuario = this.usuario;
    this.registroApoderadoRequest.codigosAlumnos=this.codigosAlumnos;

    this.apoderadoService.registrarApoderadoUsuario(this.registroApoderadoRequest).subscribe(data => {
      if(data){
        this.router.navigate(['login']);
      }
    }, (err)=>{

    });

    

  }


}
