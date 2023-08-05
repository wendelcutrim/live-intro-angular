import { Component } from '@angular/core';

interface MenuLinks {
    rota: string;
    texto: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    menus: MenuLinks[] = [
        { rota: '/', texto: 'Home' },
        { rota: '/teste', texto: 'Teste' },
        { rota: '/products', texto: 'Produtos' },
    ];
}
