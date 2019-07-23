import { Component, OnInit, Input, } from '@angular/core';

@Component({
  //selector: 'app-input-property',
  selector: 'app-curso', //Nome do componente que sera usado no HTML
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nomeCurso:nome'] //Casso queira expor de outra forma, ai é necessário remover o decorator @Input da variavel
})
export class InputPropertyComponent implements OnInit {

  //@Input expoem uma propriadade desse componente para outra clase.
  /*nome sera como sera exposta externamente (para classes e componentes), 
    e nomeCurso como sera exposta internamente (para este arquivo)*/
  @Input('nome') nomeCurso: string = ''
  
  constructor() { }

  ngOnInit() {
  }

}
