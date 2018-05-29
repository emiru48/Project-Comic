import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MarvelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelProvider {
  private apiUrl = 'https://gateway.marvel.com/v1/public';
  private apiKey = '86adf536f6878ca978d07d6ddeb43076';

  constructor(public http: HttpClient) {
    console.log('Hello MarvelProvider Provider');
  }

  getHeroes() {
    this.http.get(`${this.apiUrl}/characters?apikey=${this.apiKey}`)
      .subscribe(response => console.log(response));
  }
}
