import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {
  // Array do tipo String
  cursos: string[] = [];
  mostraCurso: boolean = true;

  constructor() { }

  onMostrarCursos() {
    this.mostraCurso = true;
  }

  onOcultaCursos() {
    this.mostraCurso = false;
  }

  ngOnInit() {
  }

}
