import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../types/article.interface';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {GetArticleResponseInterface} from '../types/getArticleResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    console.log(`Calling API => ${fullUrl}`);
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((res) => res.article)
    );

  }
}
