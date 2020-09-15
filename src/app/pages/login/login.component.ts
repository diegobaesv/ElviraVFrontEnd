import { TOKEN_NAME } from './../../_shared/var.constant';
import { LoginService } from './../../_service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  contrasena: string;

  error: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    let currentUser= JSON.parse(sessionStorage.getItem(TOKEN_NAME));
    if(currentUser != null){
      this.redirigir(currentUser['authority']);
    } 

  }

  iniciarSesion() {
    this.loginService.login(this.usuario, this.contrasena).subscribe(data => {
      if (data) {

        let token = JSON.stringify(data);
        sessionStorage.setItem(TOKEN_NAME, token);

        //let tk = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
        //const decodedToken = decode(tk.access_token);

        //let rol = decodedToken.authorities[0];
        //let rol = data[''];
        this.redirigir(data['authority']);
      }
    }, (err)=>{
      if (err.status !== 401) {
        this.error = "Error de conexión";
      }
      if (err.status === 401 || err.status === 400) {
        this.error = "Credenciales incorrectas";
      }
    });
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['']);
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

  registroApoderado(){
    this.router.navigate(['apoderado/registro']);
  }


}
