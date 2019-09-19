import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.scss']
})
export class DiretivaNgSwitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
