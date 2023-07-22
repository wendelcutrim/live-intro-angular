import { Component, OnInit } from '@angular/core';

interface People {
    id: number;
    name: string;
    email: string;
}

@Component({
    selector: 'app-first-component',
    templateUrl: './first-component.component.html',
    styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
    name: string = 'wendel';
    image: string =
        'https://sm.ign.com/ign_br/screenshot/default/blob_qb1q.jpg';

    color: string = 'blue';
    people: Array<People> = [];

    liClass: string = '';

    showName: boolean = false;

    today: Date = new Date();

    // menor que 3 erro, igual a 3 - warning, maior que 3, success;

    ngOnInit(): void {
        console.log(this.name);
        this.people = [
            { id: 1, name: 'wendel Cutrim', email: 'wendel@mail.com' },
            { id: 2, name: 'PAULO henrique', email: 'paulo@mail.com' },
            { id: 3, name: 'marcel SiMoes', email: 'marcel@mail.com' },
            { id: 4, name: 'BRUNO RENNAN', email: 'burno@mail.com' },
        ];

        this.hasName();

        this.handleListClass();
    }

    hasName(): void {
        this.name.length > 3 ? (this.showName = true) : (this.showName = false);
    }

    handleListClass(): void {
        if (this.people.length <= 2) {
            this.liClass = 'error';
        } else if (this.people.length == 3) {
            this.liClass = 'warning';
        } else {
            this.liClass = 'success';
        }
    }
}
