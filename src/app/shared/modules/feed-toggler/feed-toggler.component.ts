import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/appState.interface';
import {Observable} from 'rxjs';
import * as AuthSelectors from '../../../auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input() tagName: string;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(AuthSelectors.isLoggedInSelector));
  }

}
