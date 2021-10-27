import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PopularTagsStateInterface} from '../../feed/types/popularTagsState.interface';


export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('popularTags');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popTagsState: PopularTagsStateInterface) => popTagsState.data
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popTagsState: PopularTagsStateInterface) => popTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popTagsState: PopularTagsStateInterface) => popTagsState.error
);


