import {PopularTagsInterface} from './popular-tags.interface';

export interface PopularTagsStateInterface {
  data: string[] | null;
  isLoading: boolean;
  error: string | null;
}
