import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from "./blogs/blogs.component";
import { HomeComponent } from "./home/home.component";
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogs/:id',
    component: BlogDetailComponent
  },
  {
    path: 'create',
    component: CreateBlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
