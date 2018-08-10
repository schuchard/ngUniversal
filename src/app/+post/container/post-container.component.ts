import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  template: `
   <h3>post-container Works!</h3>
   <code>
  		{{body | json}}
   </code>
  `,
  styles: [],
})
export class PostContainerComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  body;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: { resolvedPost }) => (this.body = data.resolvedPost));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
