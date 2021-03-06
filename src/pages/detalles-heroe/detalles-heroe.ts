import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { MarvelProvider } from '../../providers/marvel/marvel';

/**
 * Generated class for the DetallesHeroePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles-heroe',
  templateUrl: 'detalles-heroe.html',
})
export class DetallesHeroePage {

  hero: any;
  heroId: number = 0;
  heroName: string = '';
  heroDetail: string = 'comics';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private marvel: MarvelProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
    this.heroId = this.navParams.get('id');
    this.heroName = this.navParams.get('name');
    let loading = this.loadingCtrl.create({
      content: 'Cargando personaje...'
    });
    loading.present();
    this.marvel.getHero(this.heroId).subscribe((response: any) => {
      this.hero = response.data.results[0];
      loading.dismiss();
    }, (_) => {
      let toast = this.toastCtrl.create({
        message: 'Error al cargar personaje',
        duration: 5000,
      });
      toast.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesHeroePage');
  }

}
