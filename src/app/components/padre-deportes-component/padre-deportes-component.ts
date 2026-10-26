import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;
  //Un metodo para enviar un mensaje al hijo
  seleccionarFavoritoPadre(event: string): void {
    console.log('Leyendo Padre')
    this.mensaje ="Su deporte favorito es: " + event;
  }
  constructor() {
    this.deportes = ["Futbol", "Baloncesto", "Tenis", "Natacion"];
  }
}
