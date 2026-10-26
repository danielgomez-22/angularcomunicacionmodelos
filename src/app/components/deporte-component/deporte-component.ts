import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent implements OnInit {
  @Input() sport!: string;
  public mensaje!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<string> = new EventEmitter<string>();

  // Usamos ngOnInit en lugar del constructor porque aquí los @Input() ya tienen valor
  ngOnInit() {
    this.mensaje = "Mi deporte favorito es: " + this.sport;
  }

  mostrarFavorito() {
    // Pasamos el deporte actual al emitir el evento para que el padre lo reciba
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}