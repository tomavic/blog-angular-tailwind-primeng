import { Component } from '@angular/core';
import { HeroComponent } from '../../layout/hero/hero.component';
import { ProjectsComponent } from '../../layout/projects/projects.component';
import { PostsComponent } from '../../layout/posts/posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePageComponent {}
