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
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InstitucionGaleriaComponent } from './pages/institucion/institucion-galeria/institucion-galeria.component';
import { EstudianteHorarioComponent } from './pages/estudiante/estudiante-horario/estudiante-horario.component';
import { ApoderadoEstudiantesComponent } from './pages/apoderado/apoderado-estudiantes/apoderado-estudiantes.component';




const routes: Routes = [
  { path: '', redirectTo: 'institucion/principal' , pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {
    path: 'institucion', children: [
      { path: 'principal', component: InstitucionPrincipalComponent },
      { path: 'galeria', component: InstitucionGaleriaComponent },
      { path: 'informacion', component: InstitucionInformacionComponent }
    ]
  },
  {
    path: 'cursos', component: CursoDetalleComponent, children: [
      { path: 'asistencia', component: CursoAsistenciaComponent },
      { path: 'conducta', component: CursoConductaComponent }
    ]
  },
  {
    path: 'estudiante', children: [
      { path: '', redirectTo: 'inicio' , pathMatch: 'full'},
      { path: 'inicio', component: EstudianteInicioComponent },
      { path: 'perfil', component: EstudiantePerfilComponent },
      { path: 'cursos', component: CursoListaComponent },
      { path: 'horario', component: EstudianteHorarioComponent }
    
    ]
  },
  {
    path: 'apoderado', children: [
      { path: '', redirectTo: 'inicio' , pathMatch: 'full'},
      { path: 'inicio', component: ApoderadoInicioComponent },
      { path: 'perfil', component: ApoderadoPerfilComponent },
      { path: 'registrarse', component: ApoderadoRegistrarseComponent },
      { path: 'estudiantes', component: ApoderadoEstudiantesComponent}
    ]
  },
  { path: '**', component: NotpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
