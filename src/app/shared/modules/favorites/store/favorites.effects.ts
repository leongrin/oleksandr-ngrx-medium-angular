import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as FavoritesActions from './favorites.actions';
import {FavoritesService} from '../favorites.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ArticleInterface} from '../../../types/article.interface';
import {of} from 'rxjs';


@Injectable()
export class FavoritesEffects {

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.clickOnFavorite),
      switchMap(({isFavorite, slug}) => {
          const article$ = isFavorite ? this.favoritesServ.removeFavorite(slug) : this.favoritesServ.addToFavorites(slug);
          return article$.pipe(
            map((article: ArticleInterface) => FavoritesActions.clickOnFavoriteSuccess({article})),

            catchError(error => of(FavoritesActions.clickOnFavoriteFailure({error: error.message || error.message.message})))
          );
        }
      )
    )
  );

  constructor(private actions$: Actions,
              private favoritesServ: FavoritesService) {
  }
}

