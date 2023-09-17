import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: 'edit-post', component: EditPostComponent },
  { path: 'post', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
