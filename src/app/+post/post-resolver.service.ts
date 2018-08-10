import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '@core/http.service';
import { Observable } from 'rxjs';
import { PostModule } from './post.module';

@Injectable()
export class PostResolver implements Resolve<any> {
  constructor(private http: HttpService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.http.get(route.params.id);
  }
}
