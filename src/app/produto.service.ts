import {Injectable} from '@angular/core';
import {Produto} from './models/produtos.models';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    private produtos: Produto[] = [
        {id: 1, nome:'Produto A', quantidade: 10, preco: 15.5},
        {id: 2, nome:'Produto B', quantidade: 20, preco: 38.5},
        {id: 3, nome:'Produto C', quantidade: 5, preco: 50.5},
        ];
  delete: any;
    
constructor() {}

getProdutos(): Produto[]{
    return this.produtos;
}

addProduto(produto: Produto): void {
    this.produtos.push(produto);
}
deleteProduto(id:number): void {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
}

getProdutoById(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
}
updateProduto(updateProduto: Produto): void {
    const index = this.produtos.findIndex(produto => produto.id === updateProduto.id);
    if(index !== -1) {
        this.produtos[index] = updateProduto;

    }
}
}