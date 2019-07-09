import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Criar variavel e tipo, TypeScript
  nomePortal: string;

  cursos: string[];

  constructor(private cursosService: CursosService) {
    //Inicializa variavel desse componente com o "this"
    this.nomePortal = 'http://loiane.training';

    /*
    Já esta sendo usado direto no HTML por meio de diretivas 
    for (let i=0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }*/

    /*
      Variavel cursos recebera o retorno do metodo getCursos do objeto cursosService, não esquecer de
      importar no app.module.ts a classe cursos.service para que o Angular saiba por onde os dados estão 
      sendo injetado.
    */
    this.cursos = this.cursosService.getCursos();    
  }

  ngOnInit() {
  }

}
