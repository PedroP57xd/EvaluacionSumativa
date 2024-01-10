import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  @Input() titulo: string ="";//parametro de imagen que recibe una ruta

  constructor() { }

  ngOnInit() {}

}
