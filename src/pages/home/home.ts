import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MarvelProvider } from '../../providers/marvel/marvel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private marvel: MarvelProvider,
  ) {
    this.marvel.searchHeroes('Sp')
      .subscribe((response: any) => console.log(response));
  }

}
