import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from 'rxjs';


@Injectable()
export class ProdutosService{
    constructor(private http: HttpClient){}

    protected UrlServiveV1: string = 'http://localhost:3000/';

    obterProdutos() : Observable<Produto[]>{
        return this.http.get<Produto[]>(this.UrlServiveV1 + "produtos");
    }
}