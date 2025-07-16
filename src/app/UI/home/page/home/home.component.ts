import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCardMorthyUseCases } from '../../../../domain/usecases/get-cardMorthyApi-use-case';
import { catchError, throwError } from 'rxjs';
import { cardMorthyModel } from '../../../../domain/models/cardMorthy/cardMorthy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  public cardMorthy?: cardMorthyModel;

  constructor(private _getCardMorthyUseCases: GetCardMorthyUseCases, private router: Router) { }

  verInfoPersona(id: string) {

    // Validar que no esté vacío
    if (!id || id.trim() === '') {
      alert('El ID no puede estar vacío.');
      return;
    }

    // Validar que sea numérico
    if (!/^\d+$/.test(id)) {
      alert('El ID debe ser un número válido.');
      return;
    }

    this._getCardMorthyUseCases.getCardById(id)
      .pipe(
        catchError((error) => {
          if (error.error !== undefined) {
            alert(error.error.error + ' ' + error.error.message);
          }
          return throwError(() => new Error(error));
        })
      ).subscribe(responseInfoCardMorthy => {
        this.cardMorthy = <cardMorthyModel>responseInfoCardMorthy;

        console.log(this.cardMorthy);
      });
  }

  logout(){
    sessionStorage.removeItem('currentSesion');
    this.router.navigate(['login']);
  }

  goForecast(){
    this.router.navigate(['forecast']);
  }

}
