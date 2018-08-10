import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostContainerComponent } from './container/post-container.component';
import { PostResolver } from './post-resolver.service';

@NgModule({
  imports: [CommonModule, PostRoutingModule],
  declarations: [PostContainerComponent],
  providers: [PostResolver],
})
export class PostModule {}
