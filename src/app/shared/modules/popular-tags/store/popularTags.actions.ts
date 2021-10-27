import {createAction, props} from '@ngrx/store';


export const getPopularTagsAction = createAction(
  '[Popular Tags] Get Popular Tags'
);

export const getPopularTagsSuccessAction = createAction(
  '[Popular Tags] Get Popular Tags Success',
  props<{popularTags: string[]}>()
);

export const getPopularTagsFailureAction = createAction(
  '[Popular Tags] Get Popular Tags Failure',
  props<{error: string}>()
);



