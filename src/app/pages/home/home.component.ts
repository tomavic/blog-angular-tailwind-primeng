import { Component } from '@angular/core';
import { HeroComponent } from '../../layout/hero/hero.component';
import { ProjectsComponent } from '../../layout/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePageComponent {}
