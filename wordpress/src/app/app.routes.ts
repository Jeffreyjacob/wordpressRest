import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'get-post',
    loadComponent: () => import('./pages/get-post/get-post.page').then( m => m.GetPostPage)
  },
  {
    path: 'create-post',
    loadComponent: () => import('./pages/create-post/create-post.page').then( m => m.CreatePostPage)
  },
];
