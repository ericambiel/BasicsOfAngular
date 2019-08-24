import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 1;

  constructor() {
    this.log('construtor');
  }
  // Life cycle hooks //

  // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  ngOnChanges() {
    this.log('ngOnChange');
  }

  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  ngOnInit() {
    this.log('ngOnInitss');
  }

  // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  ngDoCheck() {
    this.log('ngDoCheck');
  }

  // Called after ngOnInit when the component's or directive's content has been initialized.
  ngAfterContentInit() {
    this.log('ngAfeterContentInit');
  }

  // Called after every check of the component's or directive's content.
  ngAfterContentChecked() {
    this.log('ngAfeterContentInitChecked');
  }

  // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  ngAfterViewInit() {
   this.log('ngAfterViewInit');
  }

  //Called after every check of the component's view. Applies to components only.
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  // Called once, before the instance is destroyed.
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  private log(hook: string) {
    console.log(hook);
  }

}
