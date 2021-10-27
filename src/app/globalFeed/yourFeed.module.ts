import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {YourFeedComponent} from 'src/app/globalFeed/components/yourFeed/yourFeed.component';
import {FeedModule} from 'src/app/shared/modules/feed/feed.module';
import {BannerModule} from 'src/app/shared/modules/banner/banner.module';
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags/popular-tags.module';
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler/feed-toggler.module';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  declarations: [YourFeedComponent]
})
export class YourFeedModule {
}
