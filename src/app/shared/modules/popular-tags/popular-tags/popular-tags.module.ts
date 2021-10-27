import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopularTagsComponent} from '../popular-tags.component';
import {StoreModule} from '@ngrx/store';
import {popularTagsReducer} from '../store/popularTags.reducers';
import {EffectsModule} from '@ngrx/effects';
import {PopularTagsEffect} from '../store/popularTags.effect';
import {LoadingModule} from '../../loading/loading.module';
import {ErrorMessageModule} from '../../errorMessage/errorMessage.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', popularTagsReducer),
    EffectsModule.forFeature([PopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ]
})
export class PopularTagsModule { }
