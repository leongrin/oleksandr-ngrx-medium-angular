import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {getFeedAction} from '../../../shared/modules/feed/store/actions/getFeed.action';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit {
  apiUrl: string;
  tagName: string;
  limit = environment.limit;
  secondOrBeyondRequest = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.tagName);
      this.tagName = params.tagName;
      this.apiUrl = `/articles?tag=${this.tagName}`;
      if (this.secondOrBeyondRequest) {
        this.store.dispatch(getFeedAction({url: `${this.apiUrl}?offset=0&page=10`}));
      }
      this.secondOrBeyondRequest = true;
    });
  }

}
