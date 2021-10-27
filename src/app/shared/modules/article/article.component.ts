import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/appState.interface';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../../types/article.interface';
import * as ArticleSelectors from './store/article.selectors';
import {filter} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import * as ArticleActions from './store/article.actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article$: Observable<ArticleInterface>;

  constructor(private store: Store<AppStateInterface>,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(ArticleSelectors.articleSelector));

    this.route.params.subscribe((params: Params) => {
      const slug = params.articleName;
      console.log(`Slug => ${slug}`);
      this.store.dispatch(ArticleActions.getArticle({slug}));
    });

    this.article$.pipe(
      filter(article => !!article)
    )
      .subscribe(article => console.log(`article title => ${article.title}`));
  }

}
