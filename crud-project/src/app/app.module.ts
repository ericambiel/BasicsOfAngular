import { FormsModule }   from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importa nosso arquivo de configuração com firebase
import { environment } from './../environments/environment';

//Importa classe que faz inicialização do app no projeto
import { AngularFireModule } from '@angular/fire';

//Realtime database
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Inicializa fire base no projeto
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //Realtime database
    AngularFireDatabaseModule,
    //Necessario para formar a parte grafica
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
