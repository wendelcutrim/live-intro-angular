import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    pageTitle: string = 'Home Page';
    pageDescription: string = 'Home Page Description';
    fruta: string = '';
    frutas: any;

    ngOnInit(): void {
        const storage = localStorage.getItem('frutas') || '[]';
        this.frutas = JSON.parse(storage);
    }

    addFruta() {
        this.frutas.push(this.fruta);
        this.fruta = '';
        localStorage.setItem('frutas', JSON.stringify(this.frutas));
    }

    deletarFruta(fruta: string) {
        this.frutas = this.frutas.filter((f: string) => f !== fruta);
        localStorage.setItem('frutas', JSON.stringify(this.frutas));
    }
}
