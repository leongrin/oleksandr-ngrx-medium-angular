import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ArticleEditActions from './articleEdit.actions';
import {ArticleService} from '../../shared/services/article.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class ArticleEditEffects {

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleEditActions.editArticle),
      switchMap(actionData =>
        this.articleServ.updateArticle(actionData.article, actionData.slug)
          .pipe(
            map(article => ArticleEditActions.editArticleSuccess({article})),

            catchError(err => of(ArticleEditActions.editArticleFailure(err.message || err.message.message)))
          )
      )
    )
  );

  redirectAfterArticleUpdated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleEditActions.editArticle),
      tap(({slug}) => this.router.navigateByUrl(`/articles/${slug}`))
    ), {dispatch: false}
  );

  constructor(private actions$: Actions,
              private articleServ: ArticleService,
              private router: Router) {
  }
}
