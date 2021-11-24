import {createAction, props} from '@ngrx/store';
import {FavoritesInterface} from '../favorites.interface';
import {ArticleInterface} from '../../../types/article.interface';


export const clickOnFavorite = createAction(
  '[Favorites] Click On Favorite',
  props<{isFavorite: boolean, slug: string}>()
);

export const clickOnFavoriteSuccess = createAction(
  '[Favorites] Click On Favorite Success',
  props<{article: ArticleInterface}>()
);

export const clickOnFavoriteFailure = createAction(
  '[Favorites] Click On Favorite Failure',
  props<{error: string}>()
);
