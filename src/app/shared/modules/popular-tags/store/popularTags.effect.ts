import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction} from './popularTags.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PopularTagsService} from '../../feed/services/popular-tags.service';
import {of} from 'rxjs';


@Injectable()
export class PopularTagsEffect {

  popularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsServ.getPopularTags().pipe(
          map((tagsData) => getPopularTagsSuccessAction({popularTags: tagsData})),

          catchError((err) => of(getPopularTagsFailureAction(err.message)))
        );
      })
    );

  });

  constructor(private popularTagsServ: PopularTagsService,
              private actions$: Actions) {
  }

}
