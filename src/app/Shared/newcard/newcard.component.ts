import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.scss'],
})
export class NewcardComponent  implements OnInit {

  @Input() titulo: string = "";
  @Input() subtitulo: string = "";
  @Input() descripcion: string = "";
  @Input() imagen: string = "";

  constructor() { }

  ngOnInit() {}

}
