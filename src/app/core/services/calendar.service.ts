import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class CalendarService {

  private referenceDateSource = new Subject<any>();
  referenceDate$ = this.referenceDateSource.asObservable();

  setReferenceDate(date) {
    this.referenceDateSource.next(date);
  }


}
