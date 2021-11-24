import {createReducer, on} from '@ngrx/store';
import * as ArticleCreateActions from './articleCreate.actions';
import {routerNavigationAction} from '@ngrx/router-store';


export interface ArticleCreateStateInterface {
  isLoading: boolean;
  error: string | null;
}

export const initialState = {
  isLoading: false,
  error: null
};

export const articleCreateReducer = createReducer(
  initialState,

  on(
    ArticleCreateActions.createArticle,
    (state, action) => {
      return {
        ...state,
        isLoading: true
      };
    }
  ),
  on(
    ArticleCreateActions.createArticleSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false
      };
    }
  ),
  on(
    ArticleCreateActions.createArticleFailure,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
  ),
  on(
    routerNavigationAction,
    () => {
      return initialState;
    }
  ),
);
