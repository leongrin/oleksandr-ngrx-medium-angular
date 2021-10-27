import {Component, Input, OnInit} from '@angular/core';
import {AppStateInterface} from '../../types/appState.interface';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as PopTagsSelectors from './store/popularTags.selectors';
import {getPopularTagsAction} from './store/popularTags.actions';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  @Input() popularTags: string[];
  popTags$: Observable<string[] | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.store.dispatch(getPopularTagsAction());
    this.popTags$ = this.store.pipe(select(PopTagsSelectors.popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(PopTagsSelectors.isLoadingSelector));
    this.error$ = this.store.pipe(select(PopTagsSelectors.errorSelector));
    /*this.popTags$.pipe(
      filter(res => !!res)
    )
      .subscribe(tags => console.log(tags));*/
  }


}
