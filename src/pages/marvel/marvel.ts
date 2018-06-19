import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  sampleHeroes = [];
  heroes = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private marvel: MarvelProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
  }

  search(ev: any) {
    const text = ev.target.value;

    if (text && text.trim() != '') {
      let loading = this.loadingCtrl.create({
        content: 'Buscando personajes...'
      });
      loading.present();
      this.marvel.searchHeroes(text).subscribe((response: any) => {
        this.heroes = response.data.results;
        loading.dismiss();
      }, (_) => {
        let toast = this.toastCtrl.create({
          message: 'Error al buscar personajes',
          duration: 5000,
        });
        toast.present();
      });
    } else {
      this.heroes = this.sampleHeroes;
    }
  }

  viewHero(hero: any) {
    this.navCtrl.push('DetallesHeroePage', {
      id: hero.id,
      name: hero.name,
    });
  }

  initialHeroes() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando personajes de ejemplo...'
    });
    loading.present();
    this.marvel.getHeroes().subscribe((response: any) => {
      this.sampleHeroes = response.data.results;
      this.heroes = this.sampleHeroes;
      loading.dismiss();
    }, (_) => {
      let toast = this.toastCtrl.create({
        message: 'Error al cargar personajes de ejemplo',
        duration: 5000,
      });
      toast.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarvelPage');
    this.initialHeroes();
  }

}
