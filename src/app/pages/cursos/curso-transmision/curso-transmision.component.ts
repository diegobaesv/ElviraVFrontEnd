import { Curso } from './../../../_model/Curso';
import { CursoService } from './../../../_service/curso.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-curso-transmision',
  templateUrl: './curso-transmision.component.html',
  styleUrls: ['./curso-transmision.component.css']
})
export class CursoTransmisionComponent implements OnInit {

  id:number;
  curso: Curso;

  constructor(private cursoService: CursoService,  private route: ActivatedRoute,private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

    this.cargarScriptVideo();
    this.route.params.subscribe((params: Params) => {
      this.id=params['id'];
      this.initPage();
    });



  }

  initPage(){
    this.cursoService.getCursoById(this.id).subscribe(data =>{
      this.curso=data;
    });
  }

  cargarScriptVideo(){
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    var player = videojs('#player') 
    `;

    this._renderer2.appendChild(this._document.body, script);

  }

}
