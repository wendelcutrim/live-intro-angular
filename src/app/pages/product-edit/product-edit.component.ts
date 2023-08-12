import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IFakeProducts } from "src/app/interfaces/FakeProduct.interface";
import { ProductsService } from "src/app/services/products.service";

@Component({
    selector: "app-product-edit",
    templateUrl: "./product-edit.component.html",
    styleUrls: ["./product-edit.component.scss"],
})
export class ProductEditComponent implements OnInit {
    product!: FormGroup;
    id!: number;

    constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params["id"];
        this.getProduct(this.id);
    }

    getProduct(id: number) {
        this.productsService.find(id).subscribe({
            next: (response) => {
                console.log(response);
                this.product = this.formBuilder.group({
                    id: [response.id, Validators.required],
                    title: [response.title, Validators.required],
                    price: [response.price, Validators.required],
                    description: [response.description, Validators.required],
                    category: [response.category, Validators.required],
                    image: [response.image, Validators.required],
                    rating: [response.rating, Validators.required],
                });
            },
        });
    }

    updateProduct() {
        if (this.product.valid) {
            this.productsService.update(this.product.value).subscribe({
                next: () => this.router.navigate(["/products"]),
                error: (err) => console.error(err),
            });
        } else {
            alert("Não foi possível atualizar, digite os dados corretamente");
        }
    }
}
