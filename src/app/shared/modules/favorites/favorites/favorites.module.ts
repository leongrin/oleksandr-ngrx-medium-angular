import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoritesComponent} from '../favorites.component';
import {EffectsModule} from '@ngrx/effects';
import {FavoritesEffects} from '../store/favorites.effects';



@NgModule({
  declarations: [FavoritesComponent],
  exports: [FavoritesComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([FavoritesEffects])
  ]
})
export class FavoritesModule { }
