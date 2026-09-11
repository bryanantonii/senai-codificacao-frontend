import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  imports: [FormsModule, NgIf],
  selector: 'app-desconto',
  styleUrl: './desconto.css',
  templateUrl: './desconto.html',
})
export class Desconto {
  precoOriginal: number = 0;
  percentual: number = 0;
  numeroParcelas: number = 0;
  calculado: boolean = false;
  mensagemErro: string = '';
  resultado: number = 0;



  aplicarDesconto() {
    if (this.percentual < 0 || this.percentual > 100) {
      this.mensagemErro = 'Informe um percentual entre 0 e 100!';
      this.calculado = false;
      return;
    }
    this.mensagemErro = '';
    this.resultado =
    this.precoOriginal - (this.precoOriginal * this.percentual / 100);
    this.calculado = true;
  }

  aplicarAcrescimo() {
    if (this.percentual < 0 || this.percentual > 100) {
      this.mensagemErro = 'Informe um percentual entre 0 e 100!';
      this.calculado = false;
      return;
    }
    this.mensagemErro = '';
    this.resultado =
    this.precoOriginal + (this.precoOriginal * this.percentual / 100);
    this.calculado = true;
  }

  calcularParcelas() {
    if (this.numeroParcelas === 0) {
      this.mensagemErro = 'Informe ao menos 1 parcela!'
      this.calculado = false;
      return;
    }
    this.mensagemErro = '';
    this.resultado = this.precoOriginal / this.numeroParcelas;
    this.calculado = true;
  }

  limpar() {
    this.precoOriginal = 0;
    this.percentual = 0;
    this.numeroParcelas = 0;
    this.resultado = 0;
    this.calculado = false;
    this.mensagemErro = '';
  }
}


