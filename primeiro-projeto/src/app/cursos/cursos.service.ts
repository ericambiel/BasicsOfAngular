import { Injectable } from '@angular/core';

/*
Esta classe deve ser importada em app.module para que o 
Angular saiba de onde estão vindo os dados injetados
*/

//Decorator que diz ao Angular que esta classe pode injetar dados em outras classes
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Pyton', 'JS', 'ES 6'];
  }
}
