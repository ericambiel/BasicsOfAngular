import { Component, OnInit, Input } from '@angular/core';

@Component({
  //selector: 'app-output-property',
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0 //Conseguimos impor um valor de fora da classe para esta variavel

  incrementa() {
    //Incrementa 1 em output-property.component.html para o elemento input(+)
    this.valor++;
  }

  decrementa() {
    //Decrementa 1 em output-property.component.html para o elemento input(-)
    this.valor--;
  }

  constructor() { }

  ngOnInit() {
  }

}
