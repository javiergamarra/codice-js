import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  constructor(public http: Http) {
  }

  getRepos() {
    return this.http.get('https://api.github.com/users/nhpatt/repos')
      .map(x => x.json())
      .mergeMap(x => Observable.from(x));
  }
}
