import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFakeProducts } from "../interfaces/FakeProduct.interface";
import { LimitParams } from "./types/ProductParams.type";

@Injectable({
    providedIn: "root",
})
export class ProductsService {
    private BASE_URL: string = "https://fakestoreapi.com";
    private DEFAULT_LIMIT: number = 15;

    constructor(private http: HttpClient) {}

    findAll(limit?: number, order?: LimitParams): Observable<IFakeProducts[]> {
        let params = new HttpParams();

        limit ? limit : (limit = this.DEFAULT_LIMIT);
        order ? order : (order = "desc");

        params.set("limit", limit).set("order", order);

        return this.http.get<IFakeProducts[]>(`${this.BASE_URL}/products`, {
            params,
        });
    }

    find(id: number): Observable<IFakeProducts> {
        return this.http.get<IFakeProducts>(`${this.BASE_URL}/products/${id}`);
    }

    destroy(id: number): Observable<IFakeProducts> {
        return this.http.delete<IFakeProducts>(`${this.BASE_URL}/products/${id}`);
    }

    update(product: IFakeProducts): Observable<IFakeProducts> {
        return this.http.put<IFakeProducts>(`${this.BASE_URL}/products/${product.id}`, product);
    }
}
