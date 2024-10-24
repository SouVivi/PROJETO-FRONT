import { Routes } from '@angular/router';
import { ProdutoaListaComponent } from './produtos-lista/produtoa-lista.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';

export const routes: Routes = [
    {path: '', redirectTo:'produtos-lista', pathMatch: 'full'},
    {path: 'produtos-lista', component: ProdutoaListaComponent},
    {path: 'produtos-form', component: ProdutosFormComponent},
    {path: 'produtos-form/:id', component: ProdutosFormComponent}
];
