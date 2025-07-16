import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forecastGateway } from "../../domain/models/gateway/forecast-gateway";
import { environment } from '../../../environments/environment.dev';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class ForecastApiService extends forecastGateway {

    private api_forecast_url = environment.api_info_forecast;

    constructor(
        private httpClient: HttpClient
    ) { super(); }

    override getinForecastByID(cordenates: string): Observable<any> {
        return this.httpClient.get(`${this.api_forecast_url}?latitude=50.4168&longitude=-3.7038&hourly=temperature_2m,precipitation,windspeed_10m`);
    }

}
