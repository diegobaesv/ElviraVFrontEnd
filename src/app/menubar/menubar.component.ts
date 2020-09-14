import { Router } from '@angular/router';
import { LoginService } from './../_service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    sessionStorage.clear();
    console.log("limpio");
    this.router.navigate(['login']);
    
  }

}
