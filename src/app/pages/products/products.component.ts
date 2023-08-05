import { Component } from '@angular/core';

interface Produto {
    id: number;
    nome: string;
    valor: string;
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    title: string = 'Produtos';

    bebidas: Array<Produto> = [
        { id: 1, nome: 'Coca Cola 2L', valor: '10.00' },
        { id: 2, nome: 'Coca Lata', valor: '5.00' },
        { id: 3, nome: 'Água Mineral 300ml', valor: '4.50' },
        { id: 4, nome: 'Água Mineral 1L', valor: '9.50' },
    ];
}
