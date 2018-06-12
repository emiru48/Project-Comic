import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MarvelProvider } from '../../providers/marvel/marvel';
import { DcProvider } from '../../providers/dc/dc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private marvel: MarvelProvider,
    private dc: DcProvider,
  ) {
    // this.marvel.getHeroes();
    this.dc.getHeroes();
  }

}
