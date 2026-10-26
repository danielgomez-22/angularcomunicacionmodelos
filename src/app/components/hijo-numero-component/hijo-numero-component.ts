import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo-numero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="margin-bottom: 15px;">
      <h2 style="color: red;">Número: {{ numero }}</h2>
      <button (click)="sumarAlPadre()">
        Sumar {{ numero }}
      </button>
    </div>
  `
})
export class HijoNumeroComponent {
  @Input() numero: number = 0;
  @Output() onSumar = new EventEmitter<number>();

  sumarAlPadre() {
    // Emitimos el número actual hacia el componente padre
    this.onSumar.emit(this.numero);
  }
}