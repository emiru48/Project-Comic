import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DcProvider {
  private apiUrl = 'https://comicvine.gamespot.com/api';
  private apiKey = 'ef7d48cb1ab439199744614886b2b3290801680c';

  constructor(public http: HttpClient) {
    console.log('Hello DcProvider Provider');
  }

  getHeroes() {
    this.http.get(`${this.apiUrl}/characters/?api_key=${this.apiKey}&format=json`)
      .subscribe(response => console.log(response));
  }

}
