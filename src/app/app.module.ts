import { LoginService } from './_service/login.service';
import { EstudianteService } from './_service/estudiante.service';
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
import { DocenteComponent } from './pages/docente/docente.component';
import { DocenteTransmisionComponent } from './pages/docente/docente-transmision/docente-transmision.component';
import { DocentePerfilComponent } from './pages/docente/docente-perfil/docente-perfil.component';
import { DocenteArchivoComponent } from './pages/docente/docente-archivo/docente-archivo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



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
    CursoListaComponent, CursoDetalleComponent, NotpageComponent, CursoTransmisionComponent, DocenteComponent, DocenteTransmisionComponent, DocentePerfilComponent, DocenteArchivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EstudianteService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
