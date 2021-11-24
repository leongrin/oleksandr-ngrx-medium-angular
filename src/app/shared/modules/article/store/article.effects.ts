import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ArticleService} from '../../../services/article.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as ArticleActions from './article.actions';
import {of} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class ArticleEffects {

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticle),
      switchMap(data => {
        return this.articleServ.getArticle(data.slug).pipe(
          map((article) => ArticleActions.getArticleSuccess({article})),

          catchError(error => of(ArticleActions.getArticleFailure({error: error.message || error.message.message})))
        );
      })
    )
  );

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.deleteArticle),
      tap(data => console.log(`Inside deleteArticle$ Effect to delete => ${data.slug}`)),
      switchMap(data => {
        return this.articleServ.deleteArticle(data.slug).pipe(
          map(() => ArticleActions.deleteArticleSuccess({res: true})),

          catchError(error => {
              console.log(`Inside catchError => ${error.message || error.message.message}`);
              return of(ArticleActions.deleteArticleFailure({error: error.message || error.message.message}));
            }
          )
        );
      })
    )
  );

  redirectDeleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.deleteArticle),
      tap(() => this.router.navigateByUrl('/'))
    ), {dispatch: false}
  );

  constructor(private actions$: Actions,
              private articleServ: ArticleService,
              private router: Router) {
  }

}
