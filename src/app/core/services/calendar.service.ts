import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import * as moment from "moment";

@Injectable()
export class CalendarService {

  private currentDate = moment();

  private referenceDateSource = new Subject<any>();
  referenceDate$ = this.referenceDateSource.asObservable();

  setReferenceDate(date) {
    this.referenceDateSource.next(date);
  }

  getCurrentDate() {
    return this.currentDate;
  }

}
