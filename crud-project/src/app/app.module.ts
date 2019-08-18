
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Inicializa fire base no projeto
    AngularFireModule.initializeApp(environment.firebase),
    //Realtime database
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
