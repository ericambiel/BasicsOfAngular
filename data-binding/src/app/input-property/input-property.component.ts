import { Component, OnInit, Input, } from '@angular/core';

@Component({
  //selector: 'app-input-property',
  selector: 'app-curso', //Nome do componente que sera usado no HTML
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs: ['nomeCurso:nome'] //Caso queira expor de outra forma, ai é necessário remover o decorator @Input da variavel
})
export class InputPropertyComponent implements OnInit {

  //@Input expoem propriadades desse componente para outra clase.
  /*('nomeCurso') sera o nome da variavel que sera vista externamente (para classes e componentes), 
    e nomeCurso: string como sera vista internamente (para este arquivo). Se ocultar-mos
    o conteudo de dentro do parenteses, tanto internamente quanto externamente teremos os mesmo 
    nome*/
  @Input('nomeCurso') nomeCurso: string = ''
  
  constructor() { }

  ngOnInit() {
  }

}
