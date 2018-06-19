import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MarvelProvider } from '../../providers/marvel/marvel';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marvel',
  templateUrl: 'marvel.html',
})
export class MarvelPage {

  heroes = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private marvel: MarvelProvider,
  ) {
  }

  search(ev: any) {
    const text = ev.target.value;

    if (text && text.trim() != '') {
      this.marvel.searchHeroes(text).subscribe((response: any) => {
        this.heroes = response.data.results;
      });
    } else {
      this.heroes = [];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarvelPage');
  }

}
