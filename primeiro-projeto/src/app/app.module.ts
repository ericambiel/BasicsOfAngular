//Este modulo é o RAIZ da aplicação

//Prepara o BrowserModule prepara esse modulo para ser rodado em um Broser
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Import necessario para apontar o componente meu-primeiro.component
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
//Import para injetar-mos os dados dos Cursos na classe cursos.component
import { CursosService } from './cursos/cursos.service';

//Meta dados
@NgModule({
  //Componentes, Diretivas e Pipes q seram usados nesse modulo
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component //Declaração do componente que sera usado no template HTML
  ],
  //Outros modulos q seram usados nesse modulo ou que seram usados dentros de 
  //algum componente q esta a sendo usado aqui
  imports: [
    BrowserModule,
    CursosModule
  ],
  //Onde colocamos os serviços q ficaram disponiveis a este modulo
  providers: [ CursosService ],
  //É o componente que sera o Principal, oque sera instanciado quando executar a aplicação.
  bootstrap: [AppComponent]
})
export class AppModule { }
