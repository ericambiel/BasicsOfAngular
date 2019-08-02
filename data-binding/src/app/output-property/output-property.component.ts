import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  //selector: 'app-output-property',
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor'] /*Caso queira ultiliza-lo aqui em matadados, ai remover o 
  //decorator @Output() do objeto. */
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0 //Conseguimos impor um valor de fora da classe para esta variavel

  //@Output expoem o valor do objeto, de um objeto filho para um objeto filho
  //Objeto que ira passar o estado dos eventos para outras classe, como se fosse o Broadcast no AngulasJS
  @Output() mudouValor = new EventEmitter

  incrementa() {
    //Incrementa 1 em output-property.component.html para o elemento input(+)
    this.valor++
    //Emite o evento, podendo passar qualquer informação para o objeto pai, uma variavel ou objeto.
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    //Decrementa 1 em output-property.component.html para o elemento input(-)
    this.valor--
    //Emite o evento, podendo passar qualquer informação para o objeto pai, uma variavel ou objeto.
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit() {
  }

}
