import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produtos.models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtoa-lista',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './produtoa-lista.component.html',
  styleUrl: './produtoa-lista.component.css'
 })

export class ProdutoaListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService){}
  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
  }
  deletarProduto(id: number): void {
    this.produtoService.deleteProduto(id);
    this.produtos = this.produtoService.getProdutos();
  }

}