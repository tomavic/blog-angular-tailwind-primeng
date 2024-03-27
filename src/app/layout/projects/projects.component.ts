import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsList: Project[] = [
    {
      id: '1',
      title: 'project 1',
      imageSrc: 'assets/project-1.png',
      description: 'Lorem Ipsum'
    },
    {
      id: '2',
      title: 'project 2',
      imageSrc: 'assets/project-2.png',
      description: 'Lorem Ipsum'
    },
    {
      id: '3',
      title: 'project 3',
      imageSrc: 'assets/project-3.png',
      description: 'Lorem Ipsum'
    }
  ];
}

export interface Project {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
}
