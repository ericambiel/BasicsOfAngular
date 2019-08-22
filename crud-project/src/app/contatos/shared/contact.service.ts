import { Injectable } from '@angular/core';
import { Contact } from './contact';

//Importa classe Database
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  //Instancia no metodo construtor o objeto db do tipo AngularFireDatabase
  constructor(private db: AngularFireDatabase) { }

  insert(contact: Contact) {
    //Salva o nó contato e faz um push para o banco
    this.db.list('contact').push(contact)
      //Logo após salvar, te devolve a key desse contato salvo, para uso futuro se quiser.
      .then((result: any) => {
        //imprime no console a key
        console.log(result.key)
      })
  }

  update(contact: Contact, key: string){
    //Atualiza lista de contato com o metodo update do objeto db, passando key e novos dados.
    this.db.list('contact').update(key,contact)
    //Caso haja algum erro durante o processo de atualização te devolve o erro informado pelo Firebase
    .catch((error: any) => {
      //imprime no console a key
      console.error(error)
    })
  }

  delete(key: string) {
    /*Chama o metodo remove do objeto db e passa como paremetro 
    a o caminho(contact/) e key do dado a ser removida*/
    this.db.object(`contact/${key}`).remove();
  }

  getAll() {
    //Acessa e retorna contedudo do objeto contact
    return this.db.list('contact')
      .snapshotChanges() // Retorna as mudanças
      .pipe(
        //executa mapeamento dessa mudanças para um objeto json
        map(changes => {
          return changes.map(changes => ({ 
            //Retorna para tela o parametro Key do objeto
            key: changes.payload.key, 
            // os ... faz com que o resto das colunas e linhas dentro do firebase para a tabela contac seja retornado
            ...changes.payload.val()
          }))
        }))
  }

}
