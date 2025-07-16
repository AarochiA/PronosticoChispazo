import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardMorthyModel } from '../models/cardMorthy/cardMorthy';
import {cardMorthyGateway} from '../models/gateway/card-morthy-gateway';

@Injectable({
  providedIn: 'root'
})

export class GetCardMorthyUseCases {

  constructor( private _cardMorthyGateway: cardMorthyGateway) {}
  
  getCardById (id: String) : Observable <cardMorthyModel> {
    return this._cardMorthyGateway.getCardByID(id);
  }
}