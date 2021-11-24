import {AuthStateInterface} from 'src/app/auth/types/authState.interface';
import {FeedStateInterface} from 'src/app/shared/modules/feed/types/feedState.interface';
import {PopularTagsStateInterface} from '../modules/feed/types/popularTagsState.interface';
import {ArticleCreateStateInterface} from '../../article-create/store/articleCreate.reducers';
import {ArticleStateInterface} from '../modules/article/store/article.reducers';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  articleCreate: ArticleCreateStateInterface;
}
