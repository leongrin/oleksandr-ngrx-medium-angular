import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {PopularTagsInterface} from '../types/popular-tags.interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {
  }

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }

  getPopularTags(): Observable<PopularTagsInterface> {
    const popularTagsApiUrl = environment.apiUrl + '/tags';
    return this.http.get<PopularTagsInterface>(popularTagsApiUrl);
  }
}
