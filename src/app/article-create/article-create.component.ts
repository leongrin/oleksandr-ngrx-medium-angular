import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../shared/types/appState.interface';
import {Observable} from 'rxjs';
import * as ArticleCreateActions from './store/articleCreate.actions';
import {ArticleInputInterface} from '../shared/types/articleInput.interface';
import * as ArticleCreateSelector from './store/articleCreate.selectors';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
  author: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(ArticleCreateSelector.isLoadingSelector));
    this.error$ = this.store.pipe(select(ArticleCreateSelector.errorSelector));
  }

  onSubmit(article: ArticleInputInterface) {
    console.log(`res => ${article.tagList}`);
    this.store.dispatch(ArticleCreateActions.createArticle({article}));
  }


}
