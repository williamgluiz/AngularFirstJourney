import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styles: [
  ]
})
export class ListarProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos!: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
        error => console.log(error)
      )
    }
}
