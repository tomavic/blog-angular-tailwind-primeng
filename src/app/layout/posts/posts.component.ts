import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  recentPostsList: Post[] = [
    {
      id: '1',
      title: 'Post 1 title',
      description: 'lorem ipsum',
      publishedOn: '17 March 2024'
    },
    {
      id: '2',
      title: 'Post 2 title',
      description: 'lorem ipsum',
      publishedOn: '18 March 2024'
    },
    {
      id: '3',
      title: 'Post 3 title',
      description: 'lorem ipsum',
      publishedOn: '19 March 2024'
    },
    {
      id: '4',
      title: 'Post 4 title',
      description: 'lorem ipsum',
      publishedOn: '16 March 2024'
    },
    {
      id: '5',
      title: 'Post 5 title',
      description: 'lorem ipsum',
      publishedOn: '15 March 2024'
    }
  ];
}

export interface Post {
  id: string;
  title: string;
  description: string;
  publishedOn: string;
}
