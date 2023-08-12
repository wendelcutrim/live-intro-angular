import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IFakeProducts } from "src/app/interfaces/FakeProduct.interface";
import { ProductsService } from "src/app/services/products.service";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
    title: string = "Produtos";

    products: Array<IFakeProducts> = [];

    constructor(private productsService: ProductsService, private router: Router) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.productsService.findAll(20, "desc").subscribe({
            next: (response) => {
                this.products = response;
                console.log(response);
            },
            error: (err) => {
                console.error("[ERROR]: ", err);
            },
            complete: () => console.log("[COMPLETE]: Requisição concluída com sucesso"),
        });
    }

    redirectProductPage(id: number): void {
        this.router.navigate([`/products/${id}`]);
    }
}
