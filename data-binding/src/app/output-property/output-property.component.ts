import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  // selector: 'app-output-property',
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['mudouValor'] /*Caso queira ultiliza-lo aqui em matadados, ai remover o 
  // decorator @Output() do objeto. */
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0; // Conseguimos importar um valor de fora da classe para esta variavel

  // @Output expoem o valor do objeto, de um objeto filho para um objeto pai
  // Objeto que ira passar o estado dos eventos para outras classe, como se fosse o Broadcast no AngulasJS
  @Output() mudouValor = new EventEmitter();

  // Variavel que ira acessar campoInput no HTML
  /* quando você diz que ele é estático é porque é um elemento que não vai sumir em algum momento da execução,
   porque caso seja um elemento dinâmico, ele poderia ocorrer um erro quando você usasse uma diretiva ng..
   Outro fator importante a se ater alem desse, é onde o elemento DOM passara a ficar disponível,
   se {static: false} sua "query" ficara disponível ao passar por ngAfterViewInit, ou seja, após os
   componentes da View serem inicializadas,  enquanto {static: true}, ao passar por ngOnInit,
   ou seja, após o construtor e junto com os Inputs Properties. */

  @ViewChild('campoInput', {static: false}) campoValorInput: ElementRef;

  incrementa() {
    // Mostra em console todas as propriedades objeto campoValorInput
    // console.log(this.campoValorInput);
    // Mostra em cosole somente o valor do objeto campoValorInput
    console.log(this.campoValorInput.nativeElement.value);

    /* Acessando o elemento atravez de property bind.
       Incrementa 1 em output-property.component.html para o elemento input(btn +) */
    // this.valor++;

    // Acessando elemento atravez do @ViewChild
    this.campoValorInput.nativeElement.value++;

    // Emite o evento, podendo passar qualquer informação para o objeto pai, uma variavel ou objeto.
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    // Decrementa 1 em output-property.component.html para o elemento input(btn -)
    // this.valor--;

    // Acessando elemento atravez do @ViewChild
    this.campoValorInput.nativeElement.value--;

    // Emite o evento, podendo passar qualquer informação para o objeto pai, uma variavel ou objeto.

    this.mudouValor.emit({novoValor: this.valor}); // Para subtrair menos 1
  }

  constructor() { }

  ngOnInit() {
  }

}
