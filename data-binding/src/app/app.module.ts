import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

// Bootstrap
import { AlertModule } from 'ngx-bootstrap';

import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component'; // Importar para funcionar o ngModel no data-binding.componente.html

@NgModule({
  /* Os nomes da declaração seguem o seguinte formato
  classe - DataBindingComponent <=> pasta - data-binding (data-binding.component.xxx) <=> componente - app-data-binding
  */
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    PaiComponent,
    FilhoComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule // Importar para funcionar o ngModel no componente.html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
