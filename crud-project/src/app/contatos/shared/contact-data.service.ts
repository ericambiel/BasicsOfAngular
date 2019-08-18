import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  private contactSource = new BehaviorSubject({ contact: null, key: ''})
  currentContact = this.contactSource.asObservable();
  
  constructor() { }

  changeContact(contact: Contact, key: string) {
    this.contactSource.next({ contact: contact, key:key })
  }
}
