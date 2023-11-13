import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { ContatoSucessoComponent } from './componentes/contato-sucesso/contato-sucesso.component';

export const rootRoouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListarProdutosComponent },
    { path: 'produto-detalhe/:id', component: ListarProdutosComponent },
    { path: 'sucesso', component: ContatoSucessoComponent },
];