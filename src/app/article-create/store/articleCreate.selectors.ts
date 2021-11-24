import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticleCreateStateInterface} from './articleCreate.reducers';


export const articleCreateFeatureSelector = createFeatureSelector<ArticleCreateStateInterface>('articleCreate');

export const isLoadingSelector = createSelector(
  articleCreateFeatureSelector,
  (articleCreateState) => articleCreateState.isLoading
);

export const errorSelector = createSelector(
  articleCreateFeatureSelector,
  (articleCreateState) => articleCreateState.error
);

