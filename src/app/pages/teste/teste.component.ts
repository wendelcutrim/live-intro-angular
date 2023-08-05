import { Component } from '@angular/core';
interface Pessoa {
    nome: string;
    email: string;
}

@Component({
    selector: 'app-teste',
    templateUrl: './teste.component.html',
    styleUrls: ['./teste.component.scss'],
})
export class TesteComponent {
    title: string = 'Teste título';

    showWelcomeAlert(pessoa: Pessoa) {
        console.log('dados que vieram do componente output: ', pessoa);
        alert(`Seja bem vindo ${pessoa.nome}`);
    }
}
