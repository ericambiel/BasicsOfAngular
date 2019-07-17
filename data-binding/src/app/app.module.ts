import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

//Bootstrap
import { AlertModule } from 'ngx-bootstrap';

import { FormsModule }   from '@angular/forms'; //Importar para funcionar o ngModel no data-binding.componente.html

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule //Importar para funcionar o ngModel no componente.html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
