import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../types/article.interface';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {GetArticleResponseInterface} from '../types/getArticleResponse.interface';
import {ArticleInputInterface} from '../types/articleInput.interface';
import {SaveArticleResponseInterface} from '../types/saveArticleResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((res) => res.article)
    );
  }

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    console.log(`fullUrl to delete => ${fullUrl}`);
    return this.http.delete<{}>(fullUrl);
  }

  createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles`;
    console.log(`createArticle API call => ${url}`);

    return this.http.post<SaveArticleResponseInterface>(url, {article: articleInput}).pipe(
      map(res => res.article)
    );
  }


  updateArticle(articleInput: ArticleInputInterface, slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    console.log(`createArticle API call => ${url}`);

    return this.http.put<SaveArticleResponseInterface>(url, {article: articleInput}).pipe(
      map(res => res.article)
    );
  }

}
