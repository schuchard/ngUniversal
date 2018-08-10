import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostContainerComponent } from './container/post-container.component';
import { PostResolver } from './service/post-resolver.service';
import { PostService } from './service/post.service';

@NgModule({
  imports: [CommonModule, PostRoutingModule],
  declarations: [PostContainerComponent],
  providers: [PostResolver, PostService],
})
export class PostModule {}
