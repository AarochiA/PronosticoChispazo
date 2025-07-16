import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetforecastUseCases } from '../../../../domain/usecases/get-forecastApi-use-case';
import { catchError, throwError } from 'rxjs';
import { forecastModel } from '../../../../domain/models/forecast/forecast';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-forecast-statistics',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './forecast-statistics.component.html',
  styleUrl: './forecast-statistics.component.css'
})
export class ForecastStatisticsComponent {

  public forecastObj?: forecastModel;

  chartData?: ChartConfiguration<'line'>['data'];
  chartOptions?: ChartConfiguration<'line'>['options'];

  constructor(private _getforecastUseCases: GetforecastUseCases, private router: Router) { }

  verInfoForecast() {
    this._getforecastUseCases.getinForecastById('windspeed: 10m')
      .pipe(
        catchError((error) => {
          if (error.error !== undefined) {
            alert(error.error.error + ' ' + error.error.message);
          }
          return throwError(() => new Error(error));
        })
      ).subscribe(responseInforecast => {
        this.forecastObj = <forecastModel>responseInforecast;

        console.log(this.forecastObj);

        const time = this.forecastObj.hourly.time.slice(0, 50);
        const temperature = this.forecastObj.hourly.temperature_2m.slice(0, 50);
        const precipitation = this.forecastObj.hourly.precipitation.slice(0, 50);

        this.chartData = {
          labels: time,
          datasets: [
            {
              label: 'Temperatura (°C)',
              data: temperature,
              borderColor: 'red',
              yAxisID: 'y1'
            },
            {
              label: 'Precipitación (mm)',
              data: precipitation,
              borderColor: 'blue',
              yAxisID: 'y2'
            }
          ]
        };

        this.chartOptions = {
          responsive: true,
          scales: {
            y1: {
              type: 'linear',
              position: 'left',
              title: {
                display: true,
                text: 'Temperatura (°C)'
              }
            },
            y2: {
              type: 'linear',
              position: 'right',
              title: {
                display: true,
                text: 'Precipitación (mm)'
              },
              grid: {
                drawOnChartArea: false
              }
            }
          }
        };
      });
  }

  logout() {
    sessionStorage.removeItem('currentSesion');
    this.router.navigate(['login']);
  }

  verCardMorthy() {
    this.router.navigate(['home']);
  }

}
