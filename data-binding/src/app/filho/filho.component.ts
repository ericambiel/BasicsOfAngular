import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamiliaPai;
  // Enviara para que quiser pegar
  @Output() feedbackFilho = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.recebeFamiliaPai);
  }

  // Devolvera para objeto pai através do @Output um atributo emitindo um evento
  feedback() {
    // Emite o evento para o property-event
    this.feedbackFilho.emit({ nome: 'Eric', SobreNome: 'Ambiel' });
    // mostra no console o objeto feedbackFilho
    console.log('Enviado evento ao Pai', this.feedbackFilho);
  }
}
