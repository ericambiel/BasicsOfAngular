import { Component, OnInit } from '@angular/core';

import { ContactDataService } from './../shared/contact-data.service';
import { ContactService } from './../shared/contact.service';
import { Contact } from './../shared/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  contato: Contact
  key: string = ''

  constructor(private contactService: ContactService, private contactDataService: ContactDataService) { }

  ngOnInit() {
    this.contato = new Contact();

    /*contactDataService recebe todas as alterações(.subscribe) sempre que 
    currentContato(variavel) for alterado pelo metodo changeContact em contact-data.service*/
    this.contactDataService.currentContact.subscribe(data => {
      /*Se holver uma mudança essa sera passada a arrow-function
      que validara se há tanto um contato quanto um chave nova*/
      if (data.contact && data.key) {
        /*Sendo verdadeiro as duas condições, atribuira esses novos 
        dados para um novo objeto contato que por sua vez atualizara todos
        os outros componente por meio do 2way data bind*/
        this.contato = new Contact()
        //Atributos mapeados no formularo por 2way data bind
        this.contato.address = data.contact.adress
        this.contato.birthdate = data.contact.birthdate
        this.contato.email = data.contact.email
        this.contato.name = data.contact.name
        this.contato.tel = data.contact.tel
        this.key = data.key 
      }
    })
  }

  onSubmit(){
    if (this.key) {
      //Atualiza com valores novos adquiridos pelo subscribe acima
      this.contactService.update(this.contato, this.key)
    } else {
      this.contactService.insert(this.contato)
    }
    this.contato = new Contact();
  }
}
