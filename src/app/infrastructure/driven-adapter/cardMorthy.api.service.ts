import { HttpClient, HttpHeaders } from "@angular/common/http";
import { cardMorthyGateway } from "../../domain/models/gateway/card-morthy-gateway";
import { environment } from '../../../environments/environment.dev';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class CardMorthyApiService extends cardMorthyGateway {

    private api_Morthy_url = environment.api_info_rickandmorty;

    constructor(
        private httpClient: HttpClient
    ) { super(); }

    override getCardByID(id: string): Observable<any> {
        return this.httpClient.get(`${this.api_Morthy_url}character/` + id);
    }

}
