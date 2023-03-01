import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  title = 'Prueba Angular';
  contador: number = 0;
  par: boolean = false;
  pulsaBoton() {
    this.contador++;
    this.par = this.contador % 2 == 0;
  }
}
