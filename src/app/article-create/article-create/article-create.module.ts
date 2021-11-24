import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCreateComponent} from '../article-create.component';
import {ArticleFormModule} from '../../shared/modules/article-form/article-form/article-form.module';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {ArticleCreateEffects} from '../store/articleCreate.effects';
import {StoreModule} from '@ngrx/store';
import {articleCreateReducer} from '../store/articleCreate.reducers';
import {ErrorMessageModule} from '../../shared/modules/errorMessage/errorMessage.module';

const routes = [
  {
    path: 'article-new',
    component: ArticleCreateComponent
  }
];

@NgModule({
  declarations: [ArticleCreateComponent],
  imports: [
    CommonModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ArticleCreateEffects]),
    StoreModule.forFeature('articleCreate', articleCreateReducer)
  ]
})
export class ArticleCreateModule { }
