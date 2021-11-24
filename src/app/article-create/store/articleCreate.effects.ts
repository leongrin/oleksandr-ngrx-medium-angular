import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ArticleCreateService} from '../article-create.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as ArticleCreateActions from './articleCreate.actions';
import {ArticleInterface} from '../../shared/types/article.interface';
import {of} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class ArticleCreateEffects {

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleCreateActions.createArticle),
      switchMap(actionObj =>
        this.articleCreateServ.createArticle(actionObj.article).pipe(
          map((article: ArticleInterface) => ArticleCreateActions.createArticleSuccess({article})),

          catchError(error => of(ArticleCreateActions.createArticleFailure({error: error.message || error.message.message})))
        )
      )
    )
  );

  redirectAfterArticleCreated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleCreateActions.createArticleSuccess),
      tap(({article}) => this.router.navigateByUrl(`/articles/${article.slug}`))
    ), {dispatch: false}
  );

  constructor(private actions$: Actions,
              private articleCreateServ: ArticleCreateService,
              private router: Router) {
  }
}
