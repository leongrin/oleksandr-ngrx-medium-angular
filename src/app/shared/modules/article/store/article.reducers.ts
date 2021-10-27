import {ArticleInterface} from '../../../types/article.interface';
import {createReducer, on} from '@ngrx/store';
import * as ArticleActions from './article.actions';


export interface ArticleStateInterface {
  data: ArticleInterface | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null
};


export const articleReducer = createReducer(
  initialState,

  on(
    ArticleActions.getArticle,
    (state, action) => {
      return {
        ...state,
        isLoading: true
      };
    }
  ),
  on(
    ArticleActions.getArticleSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.article
      };
    }
  ),
  on(
    ArticleActions.getArticleFailure,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
  ),
);
