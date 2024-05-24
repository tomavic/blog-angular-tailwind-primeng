import { Component } from '@angular/core';
import { PostsComponent } from '../../layout/posts/posts.component';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './posts.component.html'
})
export class PostsPageComponent {}
