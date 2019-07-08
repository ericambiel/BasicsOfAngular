import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Criar variavel e tipo, TypeScript
  nomePortal: string;

  constructor() {
    //Inicializa variavel desse componente com o "this"
    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit() {
  }

}
