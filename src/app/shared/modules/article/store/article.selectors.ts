import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticleStateInterface} from './article.reducers';


export const articleFeatureSelector = createFeatureSelector<ArticleStateInterface>('article');

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const authorArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data ? articleState.data.author : null
);



