import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from 'src/validators/minisculoValidator';

interface Produto {
    nome: string;
    valor: string;
}

const validacoes = [Validators.required, Validators.minLength(3)];

@Component({
    selector: 'app-cadastro-reactive-forms',
    templateUrl: './cadastro-reactive-forms.component.html',
    styleUrls: ['./cadastro-reactive-forms.component.scss'],
})
export class CadastroReactiveFormsComponent implements OnInit, OnDestroy {
    bebidas: Array<Produto> = [
        { nome: 'Coca Cola 2L', valor: '10.00' },
        { nome: 'Coca Lata', valor: '5.00' },
        { nome: 'Água Mineral 300ml', valor: '4.50' },
        { nome: 'Água Mineral 1L', valor: '9.50' },
    ];

    //FormGroup, vale a pena quando for formulários simples, não é necessário utilizar o formbuilder.
    /* cadastroForm: FormGroup = new FormGroup({
        nome: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
        ]),
        email: new FormControl(''),
        sexo: new FormControl(''),
        comida: new FormControl(''),
        bebida: new FormControl(''),
    }); */

    emailRegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    minLengthName: number = 3;

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    cadastroForm: FormGroup = this.formBuilder.group({
        nome: [
            '',
            Validators.compose([
                Validators.required,
                Validators.minLength(this.minLengthName),
            ]),
        ],
        email: [
            '',
            Validators.compose([
                Validators.required,
                Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
            ]),
        ],
        sexo: ['', Validators.required],
        comida: [''],
        bebida: [''],
    });

    ngOnInit(): void {}

    ngOnDestroy(): void {
        console.log(
            '[INFO]: Matando o componente CadastroReactiveFormsComponent'
        );
    }

    cadastrar(): void {
        if (this.cadastroForm.valid) {
            alert('Criando produto...');
            console.log(this.cadastroForm.value);
            this.cadastroForm.reset();
            this.router.navigate(['/products']);
        } else {
            alert(
                'Não foi possível enviar o formulário. Preencha os dados corretamente'
            );
        }
    }
}
