import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FormsModule } from '@angular/forms';
import { TesteComponent } from './pages/teste/teste.component';
import { HomeComponent } from './pages/home/home.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { OutputComponent } from './components/output/output.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponentComponent,
        TesteComponent,
        HomeComponent,
        PageTitleComponent,
        OutputComponent,
        CadastroComponent,
        ProductComponent,
        NotFoundComponent,
        ProductsComponent,
        HeaderComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
