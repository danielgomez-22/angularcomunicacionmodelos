import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoNumeroComponent } from '../hijo-numero-component/hijo-numero-component';

@Component({
  selector: 'app-padre-numeros',
  standalone: true,
  imports: [CommonModule, HijoNumeroComponent],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>Padre Números</h1>

      <!-- Visualización de la suma total resaltada -->
      <div style="background-color: yellow; padding: 10px; margin-bottom: 15px;">
        <h2>La suma es {{ sumaTotal }}</h2>
      </div>

      <!-- Botón para generar un nuevo número aleatorio -->
      <button (click)="generarNuevoNumero()" style="margin-bottom: 20px; padding: 5px 10px;">
        Generar número
      </button>

      <!-- Renderizamos un componente hijo por cada número en el array -->
      @for (num of numeros; track $index) {
        <app-hijo-numero>
          [numero]="num" 
          (onSumar)="manejarSuma($event)">
        </app-hijo-numero>
      }
    </div>
  `
})
export class PadreNumerosComponent {
  sumaTotal: number = 0;
  numeros: number[] = [5, 11, 57]; // Números iniciales indicados en la práctica

  // Función que recibe el valor del hijo y lo suma al total
  manejarSuma(valor: number) {
    this.sumaTotal += valor;
  }

  // Función para generar un número aleatorio nuevo y agregarlo al array
  generarNuevoNumero() {
    const nuevoAleatorio = Math.floor(Math.random() * 100) + 1;
    this.numeros.push(nuevoAleatorio);
  }
}