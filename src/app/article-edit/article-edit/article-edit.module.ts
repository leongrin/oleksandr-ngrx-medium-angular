import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleEditComponent} from '../article-edit.component';
import {ArticleFormModule} from '../../shared/modules/article-form/article-form/article-form.module';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {ArticleEditEffects} from '../store/articleEdit.effects';

const routes = [
  {
    path: 'article-edit/:slug',
    component: ArticleEditComponent
  }
];


@NgModule({
  declarations: [ArticleEditComponent],
  imports: [
    CommonModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ArticleEditEffects])
  ]
})
export class ArticleEditModule { }
