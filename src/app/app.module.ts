import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRoouterConfig } from './app..routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutosService } from './produtos/produtos.service';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { ContatoSucessoComponent } from './componentes/contato-sucesso/contato-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListarProdutosComponent,
    MensagemComponent,
    ContatoSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(rootRoouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutosService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
