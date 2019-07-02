import { Component } from "@angular/core";

//Decorator, mesma coisa que anotação no c# ou Java, maneira de passar informações adcionais ao compilador, no nosso caso o transpilador, vamos passar que esta classe é uma classe do Angular
@Component({
    selector: 'meu-primeiro-component', //Nome do componente para ser usado
    template: `
        <p>Meu primeiro componente com Angular 8!</p>
    ` //Templete HTML
})
//export permite que classe seja usada em outro lugar, alem disseo é necessario declarar componente no app.module.ts
export class MeuPrimeiroComponent {}