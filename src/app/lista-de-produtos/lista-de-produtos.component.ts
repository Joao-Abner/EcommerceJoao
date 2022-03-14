import { Produto } from './../produto.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})
export class ListaDeProdutosComponent implements OnInit {

  total: number;

  @Input() produtos: Produto[] = [];
  @Output() editar = new EventEmitter();
  @Output() excluir = new EventEmitter();
  produtoService: any;

  constructor() {

   }

  calculo(){
    this.total=0;
    for (var i = 0; i < this.produtos.length; i++) {

      let p = this.produtos [i]
      var resultado = p.preco*p.quantidade
      this.total = this.total + resultado
   }
   return this.total

  }

  ngOnInit() {
    //this.produtos = this.produtoService.getProdutos();

  }

}
