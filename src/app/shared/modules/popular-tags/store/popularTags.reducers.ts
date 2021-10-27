import {PopularTagsStateInterface} from '../../feed/types/popularTagsState.interface';
import {createReducer, on} from '@ngrx/store';
import * as PopularTagsAction from './popularTags.actions';


const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null
};

export const popularTagsReducer = createReducer(
  initialState,

  on(
    PopularTagsAction.getPopularTagsAction,
    (state, action) => {
      return {
        ...state,
        isLoading: true
      };
    }
  ),
  on(
    PopularTagsAction.getPopularTagsSuccessAction,
    (state, action) => {
      return {
        ...state,
        data: action.popularTags,
        isLoading: false
      };
    }
  ),
  on(
    PopularTagsAction.getPopularTagsFailureAction,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
  )
);


