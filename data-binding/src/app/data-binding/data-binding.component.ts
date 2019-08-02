import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  /*Metadado Style, templete in-line, pode se usado quando temos somente uma classe, caso contra 
  usar styleUrls*/
  styles: [
    `
      .highlight{
        background-color: yellow;
        /*Fonte mais grossa*/
        font-weight: bold;
  }`
  ],
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://www.linkedin.com/in/ericambiel/'
  urlImagem: any = 'http://lorempixel.com/400/200/'
  cursoAngular: boolean = true

  valorAtual: string = ''
  valorSalvo: string = ''

  isMouseOver: boolean = false

  nome: string = 'abc'
  
  //Usaremos essa variavel em um outro componente (input-property) com ajuda do Input Properties
  nomeDoCurso: string = 'Angular'

  valorInicial = 10;

  //Criando Objetos
  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true

  }

  botaoClicado(){
    alert("Botão clicado!!!")
  }

  onKeyUp(evento :KeyboardEvent){
    //HTMLInputElement é uma interface do typeScript que nos ajuda nas conversões
    //console.log((<HTMLInputElement>evento.target).value)
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(evento){
    this.valorSalvo = evento
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento) {
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit() {
  }

}
