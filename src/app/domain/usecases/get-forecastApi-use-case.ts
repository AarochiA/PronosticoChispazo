import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forecastModel } from '../models/forecast/forecast';
import {forecastGateway} from '../models/gateway/forecast-gateway';

@Injectable({
  providedIn: 'root'
})

export class GetforecastUseCases {

  constructor( private _forecastGateway: forecastGateway) {}
  
  getinForecastById (coordinates: String) : Observable <forecastModel> {
    return this._forecastGateway.getinForecastByID(coordinates);
  }
}