import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesHeroePage } from './detalles-heroe';

@NgModule({
  declarations: [
    DetallesHeroePage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesHeroePage),
  ],
})
export class DetallesHeroePageModule {}
