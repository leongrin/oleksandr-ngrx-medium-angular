import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from '../article.component';
import {RouterModule} from '@angular/router';
import {FeedModule} from '../../feed/feed.module';
import {BannerModule} from '../../banner/banner.module';
import {PopularTagsModule} from '../../popular-tags/popular-tags/popular-tags.module';
import {FeedTogglerModule} from '../../feed-toggler/feed-toggler/feed-toggler.module';
import {StoreModule} from '@ngrx/store';
import {articleReducer} from '../store/article.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ArticleEffects} from '../store/article.effects';
import {LoadingModule} from '../../loading/loading.module';
import {ErrorMessageModule} from '../../errorMessage/errorMessage.module';
import {TagListModule} from '../../tag-list/tag-list/tag-list.module';


const routes = [
  {
    path: 'articles/:articleName',
    component: ArticleComponent
  }
];


@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([ArticleEffects]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ]
})
export class ArticleModule { }
