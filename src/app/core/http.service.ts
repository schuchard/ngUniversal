import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: CoreModule,
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(path: string): Observable<any> {
    return this.http.get(path).pipe(catchError(this.handleError));
  }

  private handleError() {
    return of('HTTP Error');
  }
}
