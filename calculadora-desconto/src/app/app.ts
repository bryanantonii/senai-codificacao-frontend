import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desconto } from './desconto/desconto';

@Component({
  imports: [RouterOutlet, Desconto],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('calculadora-desconto');
}
