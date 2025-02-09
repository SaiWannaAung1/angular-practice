import { Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [
  { path: '', component: PostComponent, },
  { path: 'user', component: UserComponent, },
];
