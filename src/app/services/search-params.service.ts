import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {
  private destroyedComponent$ = new Subject<boolean>()

  constructor() { }

  setDestroy(): void {
    this.destroyedComponent$.next(true)
  }

  getDestroy$(){
    return this.destroyedComponent$.asObservable()
  }
}
