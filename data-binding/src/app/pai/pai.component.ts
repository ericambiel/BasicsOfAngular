import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  familia: Object[];

  constructor() {
    this.familia = [
      {
        nome: 'Vitor',
        sobreNome: 'Borges'
      },
      {
        nome: 'Emerson',
        sobreNome: 'Daniel'
      },
      {
        nome: 'Thiago',
        sobreNome: 'Contre!'
      }
    ];
  }

  ngOnInit() {
    console.log(this.familia);
  }

  // Método que recebera o um atributo vindo de filho quando envocado no Templete
  recebeFeedback(feedbackFilho) {
    console.log('Recebido evento de Filho >>>> ', feedbackFilho);
  }
}
