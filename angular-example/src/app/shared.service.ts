import { Injectable } from '@angular/core';
import 'rxjs/add/operator/startWith'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

  constructor() {
  }

  private state = new BehaviorSubject('4,95/mo');

  stateChanged$ = this.state.asObservable();

  emitState(value) {
    this.state.next(value);
  }

}
