import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    pageDescription: string = '';
    id!: number;

    constructor(private activedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.activedRoute.snapshot.params['id'];
        console.log(this.activedRoute.snapshot.queryParams);
    }
}
