import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importa elementos de cursos.component
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    //Contem as diretivas mais comuns
    CommonModule
  ],
  //Pipes ou diretivas que seram expostors para outros módulos
  exports:[
    //Esporta elementos de cursos.component para outros módulos
    CursosComponent
  ]
})
export class CursosModule { }
