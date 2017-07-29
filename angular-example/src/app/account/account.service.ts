import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
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

  updateDiscounts(number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post('https://gmaster.io/checkout/calculatetotal', `NumberOfLicenses=${number}`, {headers})
      .map(res => res.json())
  }

}
