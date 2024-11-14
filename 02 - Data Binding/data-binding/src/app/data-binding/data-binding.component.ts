import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrl: './data-binding.component.css',
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/400/200';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() {}

  ngOnInit(): void {}
}
