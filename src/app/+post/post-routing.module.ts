import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostResolver } from './post-resolver.service';
import { PostContainerComponent } from './container/post-container.component';

const routes: Routes = [
  {
    path: ':id',
    component: PostContainerComponent,
    resolve: {
      resolvedPost: PostResolver
    }
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
