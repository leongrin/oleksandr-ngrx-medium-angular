import {createAction, props} from '@ngrx/store';
import {ArticleInterface} from '../../../types/article.interface';


export const getArticle = createAction(
  '[Article] Get Article Start',
  props<{slug: string}>()
);

export const getArticleSuccess = createAction(
  '[Article] Get Article Success',
  props<{article: ArticleInterface}>()
);

export const getArticleFailure = createAction(
  '[Article] Get Article Failure',
  props<{error: string}>()
);




