import { Routes } from '@angular/router';
import { authGuard } from './infrastructure/helpers/guards/auth.guard';
import { LoginComponent } from '../app/UI/auth/page/login/login.component';
import { HomeComponent } from './UI/home/page/home/home.component';
import { ForecastStatisticsComponent } from './UI/summary-statistics/page/forecast-statistics/forecast-statistics.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    title: 'Login page'
  },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'forecast',
    canActivate: [authGuard],
    component: ForecastStatisticsComponent,
    title: 'Weather Forecast page'
  }
];
