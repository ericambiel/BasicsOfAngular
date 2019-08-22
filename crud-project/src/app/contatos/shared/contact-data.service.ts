import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  /*Estamos estanciando BehaviorSubject para contactSource e passando o 
  parametro contact com o tipo nullo, e key como valor vazio de string*/
  private contactSource = new BehaviorSubject({ contact: null, key: ''})
  //currentContact recebe mudanças de contacSource quando disponiveis; cria uma referencia
  currentContact = this.contactSource.asObservable();
  
  constructor() { }

  changeContact(contact: Contact, key: string) {
    // Insere um proximo objeto contato para chave inserida
    this.contactSource.next({ contact: contact, key:key })
  }
}
