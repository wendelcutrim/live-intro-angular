import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TesteComponent } from "./pages/teste/teste.component";
import { ProductComponent } from "./pages/product/product.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProductEditComponent } from "./pages/product-edit/product-edit.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "teste", component: TesteComponent },
    { path: "products", component: ProductsComponent },
    { path: "products/:id", component: ProductComponent },
    { path: "not-found", component: NotFoundComponent },
    { path: "products/:id/edit", component: ProductEditComponent },
    { path: "**", redirectTo: "/not-found" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
