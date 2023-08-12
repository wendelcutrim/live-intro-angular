import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IFakeProducts } from "src/app/interfaces/FakeProduct.interface";
import { ProductsService } from "src/app/services/products.service";

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
    pageDescription: string = "";
    id!: number;
    product!: IFakeProducts;
    editPageRouter: string = "";

    constructor(private activedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) {}

    ngOnInit(): void {
        this.id = this.activedRoute.snapshot.params["id"];
        this.getProduct();
        this.editPageRouter = `/products/${this.id}/edit`;
        console.log(this.activedRoute.snapshot.queryParams);
    }

    getProduct() {
        this.productsService.find(this.id).subscribe({
            next: (response) => (this.product = response),
            error: (err) => console.error(err),
        });
    }

    deleteProduct(id: number) {
        const confirmed = confirm("Are you sure you want to delete this product?");

        if (confirmed) {
            this.productsService.destroy(this.id).subscribe({
                next: () => this.router.navigate(["/products"]),
                error: (err) => console.error(err),
            });
        }
    }
}
