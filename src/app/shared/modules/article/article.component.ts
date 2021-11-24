import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/appState.interface';
import {combineLatest, forkJoin, Observable, Subscription} from 'rxjs';
import {ArticleInterface} from '../../types/article.interface';
import * as ArticleSelectors from './store/article.selectors';
import {filter, map} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import * as ArticleActions from './store/article.actions';
import * as AuthSelectors from '../../../auth/store/selectors';
import {CurrentUserInterface} from '../../types/currentUser.interface';
import {ProfileInterface} from '../../types/profile.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  article$: Observable<ArticleInterface>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  article: ArticleInterface;
  articleSub: Subscription;
  slug: string;

  constructor(private store: Store<AppStateInterface>,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(ArticleSelectors.articleSelector));
    this.isLoading$ = this.store.pipe(select(ArticleSelectors.isLoadingSelector));
    this.error$ = this.store.pipe(select(ArticleSelectors.errorSelector));

    this.isAuthor$ = combineLatest([
      this.store.pipe(select(ArticleSelectors.authorArticleSelector), filter(Boolean)),
      this.store.pipe(select(AuthSelectors.currentUserSelector), filter(Boolean))
      ]
    ).pipe(
      map(([author, user]: [ProfileInterface, CurrentUserInterface]) => {
        console.log(`author => ${author}`);
        console.log(`user => ${user}`);
        if (!author || !user) {
          console.log('Author is false');
          return false;
        }
        if (author && user) {
          console.log('Author is true');
          return author.username === user.username;
        }
      })
    );

    this.route.params.subscribe((params: Params) => {
      this.slug = params.articleName;
      console.log(`Slug => ${this.slug}`);
      this.store.dispatch(ArticleActions.getArticle({slug: this.slug}));
    });

    this.articleSub = this.article$.pipe(
      filter(article => !!article)
    )
      .subscribe(article => this.article = article);
  }

  deleteArticle() {
    console.log(`Slug to delete => ${this.slug}`);
    this.store.dispatch(ArticleActions.deleteArticle({slug: this.slug}));
  }

  ngOnDestroy() {
    this.articleSub.unsubscribe();
  }

}
