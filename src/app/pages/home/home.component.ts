import { Component } from '@angular/core';
import { HeroComponent } from '../../layout/hero/hero.component';
import { PostsComponent } from '../../layout/posts/posts.component';
import { ProjectsComponent } from '../../layout/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, PostsComponent],
  templateUrl: './home.component.html'
})
export class HomePageComponent {}
