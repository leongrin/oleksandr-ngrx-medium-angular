import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PopularTagsInterface} from '../types/popular-tags.interface';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<string[]> {
    const popularTagsApiUrl = environment.apiUrl + '/tags';
    return this.http.get<PopularTagsInterface>(popularTagsApiUrl).pipe(
      map(popTags => popTags.tags)
    );
  }
}
