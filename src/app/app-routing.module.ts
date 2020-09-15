import { DocenteComponent } from './pages/docente/docente.component';
import { CursoConductaComponent } from './pages/cursos/curso-conducta/curso-conducta.component';
import { CursoAsistenciaComponent } from './pages/cursos/curso-asistencia/curso-asistencia.component';
import { CursoDetalleComponent } from './pages/cursos/curso-detalle/curso-detalle.component';
import { CursoListaComponent } from './pages/cursos/curso-lista/curso-lista.component';
import { LoginComponent } from './pages/login/login.component';
import { NotpageComponent } from './pages/notpage/notpage.component';
import { ApoderadoRegistrarseComponent } from './pages/apoderado/apoderado-registrarse/apoderado-registrarse.component';
import { ApoderadoPerfilComponent } from './pages/apoderado/apoderado-perfil/apoderado-perfil.component';
import { ApoderadoInicioComponent } from './pages/apoderado/apoderado-inicio/apoderado-inicio.component';
import { EstudiantePerfilComponent } from './pages/estudiante/estudiante-perfil/estudiante-perfil.component';
import { EstudianteInicioComponent } from './pages/estudiante/estudiante-inicio/estudiante-inicio.component';
import { InstitucionInformacionComponent } from './pages/institucion/institucion-informacion/institucion-informacion.component';
import { InstitucionPrincipalComponent } from './pages/institucion/institucion-principal/institucion-principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitucionGaleriaComponent } from './pages/institucion/institucion-galeria/institucion-galeria.component';
import { EstudianteHorarioComponent } from './pages/estudiante/estudiante-horario/estudiante-horario.component';
import { ApoderadoEstudiantesComponent } from './pages/apoderado/apoderado-estudiantes/apoderado-estudiantes.component';
import { CursoTransmisionComponent } from './pages/cursos/curso-transmision/curso-transmision.component';



const routes: Routes = [
  { path: '', redirectTo: 'institucion/principal' , pathMatch: 'full'},
  { path: 'login', component: LoginComponent}, //2
  {
    path: 'institucion', children: [
      { path: 'principal', component: InstitucionPrincipalComponent }, //2
      //{ path: 'galeria', component: InstitucionGaleriaComponent }, 
      { path: 'informacion', component: InstitucionInformacionComponent } //2
    ]
  },
  {
    path: 'estudiante', children: [ 
      { path: '', redirectTo: 'inicio' , pathMatch: 'full'},
      { path: 'inicio', component: EstudianteInicioComponent }, //2
      { path: 'perfil', component: EstudiantePerfilComponent }, //2
      //{ path: 'horario', component: EstudianteHorarioComponent }, 
      { path: 'cursos', component: CursoListaComponent } //2
      //{ path: 'cursos/:id', component: CursoDetalleComponent },
      //{ path: 'cursos/:id/conducta', component: CursoConductaComponent }
    ]
  },
  {
    path: 'apoderado', children: [
      { path: '', redirectTo: 'inicio' , pathMatch: 'full'},
      { path: 'inicio', component: ApoderadoInicioComponent }, //1
      { path: 'perfil', component: ApoderadoPerfilComponent }, //0
      { path: 'registro', component: ApoderadoRegistrarseComponent }, //1
      { path: 'estudiantes', component: ApoderadoEstudiantesComponent} //1
    ]
  },
  {path: 'docente/:id', component:DocenteComponent},
  {
    path: 'cursos/:id', children: [
      { path: 'transmision' ,component: CursoTransmisionComponent}, //1
      { path: 'asistencia',component: CursoAsistenciaComponent}
    ]
  },
  { path: '**', component: NotpageComponent} //2

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
