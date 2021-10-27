import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ArticleService} from '../../../services/article.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as ArticleActions from './article.actions';
import {of} from 'rxjs';


@Injectable()
export class ArticleEffects {

  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticleActions.getArticle),
      tap(data => console.log(`data.slug => ${data.slug}`)),
      switchMap(data => {
        return this.articleServ.getArticle(data.slug).pipe(
          map((article) => ArticleActions.getArticleSuccess({article})),

          catchError(error => of(ArticleActions.getArticleFailure(error.message || error.message.message)))
        );
      })
    );
  });

  constructor(private actions$: Actions,
              private articleServ: ArticleService) {
  }

}
