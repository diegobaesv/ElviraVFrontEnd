import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { InstitucionPrincipalComponent } from './pages/institucion/institucion-principal/institucion-principal.component';
import { InstitucionGaleriaComponent } from './pages/institucion/institucion-galeria/institucion-galeria.component';
import { InstitucionInformacionComponent } from './pages/institucion/institucion-informacion/institucion-informacion.component';
import { EstudianteInicioComponent } from './pages/estudiante/estudiante-inicio/estudiante-inicio.component';
import { EstudiantePerfilComponent } from './pages/estudiante/estudiante-perfil/estudiante-perfil.component';
import { CursoAsistenciaComponent } from './pages/cursos/curso-asistencia/curso-asistencia.component';
import { CursoConductaComponent } from './pages/cursos/curso-conducta/curso-conducta.component';
import { EstudianteHorarioComponent } from './pages/estudiante/estudiante-horario/estudiante-horario.component';
import { ApoderadoInicioComponent } from './pages/apoderado/apoderado-inicio/apoderado-inicio.component';
import { ApoderadoRegistrarseComponent } from './pages/apoderado/apoderado-registrarse/apoderado-registrarse.component';
import { ApoderadoPerfilComponent } from './pages/apoderado/apoderado-perfil/apoderado-perfil.component';
import { ApoderadoEstudiantesComponent } from './pages/apoderado/apoderado-estudiantes/apoderado-estudiantes.component';
import { CursoListaComponent } from './pages/cursos/curso-lista/curso-lista.component';
import { CursoDetalleComponent } from './pages/cursos/curso-detalle/curso-detalle.component';
import { NotpageComponent } from './pages/notpage/notpage.component';
import { CursoTransmisionComponent } from './pages/cursos/curso-transmision/curso-transmision.component';



@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent, 
    LoginComponent, 
    InstitucionPrincipalComponent,
    InstitucionGaleriaComponent, 
    InstitucionInformacionComponent, 
    EstudianteInicioComponent, 
    EstudiantePerfilComponent, 
    CursoAsistenciaComponent, 
    CursoConductaComponent, 
    EstudianteHorarioComponent, 
    ApoderadoInicioComponent, 
    ApoderadoRegistrarseComponent, 
    ApoderadoPerfilComponent, 
    ApoderadoEstudiantesComponent, 
    CursoListaComponent, CursoDetalleComponent, NotpageComponent, CursoTransmisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
