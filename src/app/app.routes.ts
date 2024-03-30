import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsPageComponent } from './pages/posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'posts',
    component: PostsPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
