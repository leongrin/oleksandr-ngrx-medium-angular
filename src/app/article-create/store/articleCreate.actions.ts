import {createAction, props} from '@ngrx/store';
import {ArticleInputInterface} from '../../shared/types/articleInput.interface';
import {ArticleInterface} from '../../shared/types/article.interface';


export const createArticle = createAction(
  '[Article Create] Create Article',
  props<{article: ArticleInputInterface}>()
);

export const createArticleSuccess = createAction(
  '[Article Create] Create Article Success',
  props<{article: ArticleInterface}>()
);

export const createArticleFailure = createAction(
  '[Article Create] Create Article Failure',
  props<{error: string}>()
);



