import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Produto {
    nome: string;
    valor: string;
}

@Component({
    selector: 'app-cadastro-reactive-forms',
    templateUrl: './cadastro-reactive-forms.component.html',
    styleUrls: ['./cadastro-reactive-forms.component.scss'],
})
export class CadastroReactiveFormsComponent implements OnInit {
    bebidas: Array<Produto> = [
        { nome: 'Coca Cola 2L', valor: '10.00' },
        { nome: 'Coca Lata', valor: '5.00' },
        { nome: 'Água Mineral 300ml', valor: '4.50' },
        { nome: 'Água Mineral 1L', valor: '9.50' },
    ];

    cadastroForm: FormGroup = new FormGroup({
        nome: new FormControl(''),
        email: new FormControl(''),
        sexo: new FormControl(''),
    });

    constructor() {}

    ngOnInit(): void {}
}
