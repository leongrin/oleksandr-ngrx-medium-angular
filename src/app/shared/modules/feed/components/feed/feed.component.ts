import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {getFeedAction} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {errorSelector, feedSelector, isLoadingSelector} from 'src/app/shared/modules/feed/store/selectors';
import {environment} from 'src/environments/environment';
import {getPopularTagsAction} from '../../../popular-tags/store/popularTags.actions';


@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<GetFeedResponseInterface | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;
  tagTest: [];

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = +params.page || 1;
        this.fetchFeed();
      }
    );
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];

    /*this.feed$
      .pipe(
        filter(feed => !!feed),
        map(feed => feed.articlesCount)
      )
      .subscribe((articlesCount) => {
        console.log(`Articles count => ${articlesCount}`);
      }
    );*/

  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    let apiUrlWithParams = this.apiUrlProps;
    if (!this.apiUrlProps.includes('?tag')) {
      apiUrlWithParams  = `${this.apiUrlProps}?offset=${offset}&page=${this.currentPage}}`;
    }
    console.log(`apiUrlWithParams => ${apiUrlWithParams}`);
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}));
    this.store.dispatch(getPopularTagsAction());
  }
}
