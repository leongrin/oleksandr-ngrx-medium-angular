import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleInputInterface} from '../../types/articleInput.interface';
import {BackendErrorsInterface} from '../../types/backendErrors.interface';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInputInterface;
  @Input() isLoading: boolean;
  @Input() errors: string | null;

  @Output() articleSubmitEvent = new EventEmitter<ArticleInputInterface>();
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    console.log(this.initialValues);
  }

  initForm() {
    this.articleForm = this.fb.group({
      title: [this.initialValues.title, [Validators.required]],
      description: [this.initialValues.description, [Validators.required]],
      body: [this.initialValues.body, [Validators.required]],
      tagList: [this.initialValues.tagList.join(' ')]
    });
  }

  onSubmit() {
    const articleInput: ArticleInputInterface = {
      ...this.articleForm.value,
      tagList: this.articleForm.value.tagList.split(' ')
    };
    this.articleSubmitEvent.emit(articleInput);
  }

}
