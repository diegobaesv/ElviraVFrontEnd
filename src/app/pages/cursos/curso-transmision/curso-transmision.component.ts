import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-curso-transmision',
  templateUrl: './curso-transmision.component.html',
  styleUrls: ['./curso-transmision.component.css']
})
export class CursoTransmisionComponent implements OnInit {

  constructor( private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    var player = videojs('#player') 
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

}
