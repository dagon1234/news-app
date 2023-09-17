import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewsComponent } from './news/news.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'edit-post', component: EditPostComponent },
  { path: 'news', component: NewsComponent },
  { path: 'post', component: PostsComponent },
  { path: '', redirectTo: '/news', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
