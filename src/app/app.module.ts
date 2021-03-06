import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from 'src/app/auth/auth.module';
import {environment} from 'src/environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {TopBarModule} from 'src/app/shared/modules/topBar/topBar.module';
import {PersistanceService} from './shared/services/persistance.service';
import {AuthInterceptor} from './shared/services/authinterceptor.service';
import {YourFeedModule} from './globalFeed/yourFeed.module';
import {GlobalFeedModule} from './globalFeed/components/global-feed/global-feed/global-feed.module';
import {TagFeedModule} from './globalFeed/components/tag-feed/tag-feed/tag-feed.module';
import {ArticleModule} from './shared/modules/article/article/article.module';
import {ArticleFormModule} from './shared/modules/article-form/article-form/article-form.module';
import {ArticleCreateModule} from './article-create/article-create/article-create.module';
import {ArticleEditModule} from './article-edit/article-edit/article-edit.module';
import { FavoritesComponent } from './shared/modules/favorites/favorites.component';
import {FavoritesModule} from './shared/modules/favorites/favorites/favorites.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    YourFeedModule,
    GlobalFeedModule,
    TagFeedModule,
    ArticleModule,
    ArticleFormModule,
    ArticleCreateModule,
    ArticleEditModule,
    FavoritesModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
