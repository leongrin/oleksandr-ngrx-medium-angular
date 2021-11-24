import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleInputInterface} from '../shared/types/articleInput.interface';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../shared/types/article.interface';
import {SaveArticleResponseInterface} from '../shared/types/saveArticleResponse.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleCreateService {

  constructor(private http: HttpClient) { }

  createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles`;
    console.log(`createArticle API call => ${url}`);

    return this.http.post<SaveArticleResponseInterface>(url, {article: articleInput}).pipe(
      map(res => res.article)
    );
  }
}
