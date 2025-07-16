import { Observable } from 'rxjs';
import { cardMorthyModel } from '../cardMorthy/cardMorthy'

export abstract class cardMorthyGateway {
    abstract getCardByID(id: String): Observable<cardMorthyModel>;
}
