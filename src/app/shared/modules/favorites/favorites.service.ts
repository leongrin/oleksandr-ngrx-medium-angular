import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FavoritesInterface} from './favorites.interface';
import {environment} from '../../../../environments/environment';
import {FavoritesApiResponseInterface} from './favoritesApiResponse.interface';
import {ArticleInterface} from '../../types/article.interface';
import {GetArticleResponseInterface} from '../../types/getArticleResponse.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const apiUrl = `${environment.apiUrl}/articles/${slug}/favorite`;
    return this.http.post<GetArticleResponseInterface>(apiUrl, slug).pipe(
      map(res => res.article)
    );
  }

  removeFavorite(slug: string): Observable<ArticleInterface> {
    const apiUrl = `${environment.apiUrl}/articles/${slug}/favorite`;
    return this.http.delete<GetArticleResponseInterface>(apiUrl).pipe(
      map(res => res.article)
    );
  }

  constructor(private http: HttpClient) { }
}
