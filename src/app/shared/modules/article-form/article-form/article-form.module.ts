import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleFormComponent} from '../article-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BackendErrorMessagesModule} from '../../backendErrorMessages/backendErrorMessages.module';



@NgModule({
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ArticleFormModule { }
