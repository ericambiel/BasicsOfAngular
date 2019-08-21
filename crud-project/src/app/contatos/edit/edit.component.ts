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
  }

  onSubmit(){
    if (this.key) {

    } else {
      this.contactService.insert(this.contato)
      this.contato = new Contact();
    }
  }
}
