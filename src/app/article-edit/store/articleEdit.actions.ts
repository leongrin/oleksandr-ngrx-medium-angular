import {createAction, props} from '@ngrx/store';
import {ArticleInterface} from '../../shared/types/article.interface';
import {ArticleInputInterface} from '../../shared/types/articleInput.interface';


export const editArticle = createAction(
  '[Article Edit] Edit Article',
  props<{article: ArticleInputInterface, slug: string}>()
);

export const editArticleSuccess = createAction(
  '[Article Edit] Edit Article Success',
  props<{article: ArticleInterface}>()
);

export const editArticleFailure = createAction(
  '[Article Edit] Edit Article Failure',
  props<{error: string}>()
);


