import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/appState.interface';
import * as FavoritesActions from './store/favorites.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Input() favoriteCount: number | null;
  @Input() articleSlug: string;

  favCount: number;
  isFav: boolean;

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.favCount = this.favoriteCount || 0;
    this.isFav = this.isFavorite;
  }

  handleLike() {
    this.store.dispatch(FavoritesActions.clickOnFavorite({isFavorite: this.isFav, slug: this.articleSlug}));

    if (this.isFav) {
      this.favCount = --this.favCount;
    } else {
      this.favCount = ++this.favCount;
    }

    this.isFav = !this.isFav;
  }

}
