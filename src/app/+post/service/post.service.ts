import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/http.service';
import { PostModule } from '../post.module';

@Injectable()
export class PostService {
  constructor(private http: HttpService) {}

  getPosts(path: string): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${path}`);
  }
}
