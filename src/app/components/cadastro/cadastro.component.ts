import { Component, OnInit } from '@angular/core';

interface Produto {
    nome: string;
    valor: string;
}

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
    bebidas: Array<Produto> = [
        { nome: 'Coca Cola 2L', valor: '10.00' },
        { nome: 'Coca Lata', valor: '5.00' },
        { nome: 'Água Mineral 300ml', valor: '4.50' },
        { nome: 'Água Mineral 1L', valor: '9.50' },
    ];

    bebidasExibir: Produto[] = [];

    ngOnInit(): void {
        this.setBebidasExibir();
    }

    setBebidasExibir() {
        for (let i = 0; i <= 1; i++) {
            this.bebidasExibir.push(this.bebidas[i]);
        }
    }
}
