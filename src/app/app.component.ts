import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  produtos: Produto[] = [];
  produto: Produto = new Produto(null, null,);
  indiceEdicao = -1;

  constructor() {}

  ngOnInit() {
    this.produtos.push(new Produto("Caderno Simples", 7.99));
    this.produtos.push(new Produto("Caderno Grande", 11.95));
    this.produtos.push(new Produto("Caneta Azul", 1.83));
    this.produtos.push(new Produto("Caneta Preta", 1.85));
    this.produtos.push(new Produto("Caneta Vermelha", 1.85));
    this.produtos.push(new Produto("Apontador", 3.35));
    this.produtos.push(new Produto("Borracha", 1.85));
    this.produtos.push(new Produto("Cola Branca", 4.85));
    this.produtos.push(new Produto("Estojo Simples", 7.85));
    this.produtos.push(new Produto("Lápis de cor", 12.95));
    this.produtos.push(new Produto("Lápis Preto 2HB", 1.85));
    this.produtos.push(new Produto("Marca-texto", 3.85));
    this.produtos.push(new Produto("Papel sulfite A4", 11.85));
    this.produtos.push(new Produto("Régua", 3.85));
    this.produtos.push(new Produto("Tesoura", 1.85));
  }

  salvar(): void {
    if (!this.produto.nome) {
      console.log('Por favor informe o nome');
      return;
    }

    if (!this.produto.preco) {
      console.log('Por favor informe o preço');
      return;
    }

    if (!this.produto.quantidade) {
      console.log('Por favor informe a quantidade');
      return;
    }

    this.produto.preco = Number(
      this.produto.preco.toString().replace(',', '.')
    );

    if (this.indiceEdicao > -1) {
      this.produtos[this.indiceEdicao] = this.produto;
    } else {
      this.produtos.unshift(this.produto);
    }

    this.produto = new Produto(null, null);
    this.indiceEdicao = -1;
  }

  excluir(index: number) {
    this.produtos.splice(index, 1);
  }

  editar(index: number) {
    this.indiceEdicao = index;
    this.produto = Object.assign(
      new Produto(null, null),
      this.produtos[index]
    );
  }
}

