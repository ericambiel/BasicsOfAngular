import { ContactDataService } from './../shared/contact-data.service';
import { ContactService } from './../shared/contact.service';
import { Component, OnInit } from '@angular/core';
//Classe que fica observando o objeto por mudanças
import { Observable } from 'rxjs';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //Objeto que recebera os contatos do servidor quando inseridos
  contacts: Observable<any>;

  constructor(private contactService: ContactService, private contactDataService: ContactDataService) { }

  ngOnInit() {
    //Atribui todos os contatos do Firebase para contatos
    this.contacts = this.contactService.getAll();
  }

  delete(key: string) {

  }

  //
  edit(contato: Contact, key: string) {
      this.contactDataService.changeContact(contato, key)
  }
}
