import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ArticleInputInterface} from '../shared/types/articleInput.interface';
import * as ArticleCreateActions from '../article-create/store/articleCreate.actions';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../shared/types/appState.interface';
import * as ArticleCreateSelector from '../article-create/store/articleCreate.selectors';
import {ActivatedRoute, Params} from '@angular/router';
import * as ArticleActions from '../shared/modules/article/store/article.actions';
import {ArticleInterface} from '../shared/types/article.interface';
import {filter} from 'rxjs/operators';
import * as ArticleSelectors from '../shared/modules/article/store/article.selectors';
import * as ArticleEditActions from '../article-edit/store/articleEdit.actions';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  author: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  article$: Observable<ArticleInterface>;
  slug: string;
  article: ArticleInterface;
  initialValues: ArticleInterface;

  constructor(private store: Store<AppStateInterface>,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(ArticleSelectors.articleSelector));

    this.isLoading$ = this.store.pipe(select(ArticleCreateSelector.isLoadingSelector));
    this.error$ = this.store.pipe(select(ArticleCreateSelector.errorSelector));

    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug;
      console.log(`Slug => ${this.slug}`);
      this.store.dispatch(ArticleActions.getArticle({slug: this.slug}));
    });
  }

  onSubmit(article: ArticleInputInterface) {
    console.log(`res => ${article.tagList}`);
    this.store.dispatch(ArticleEditActions.editArticle({article, slug: this.slug}));
  }

}
