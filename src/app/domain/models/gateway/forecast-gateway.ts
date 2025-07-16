import { Observable } from 'rxjs';
import { forecastModel } from '../forecast/forecast'

export abstract class forecastGateway {
    abstract getinForecastByID(coordinates: String): Observable<forecastModel>;
}
