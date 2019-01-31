import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from "./blogs/blogs.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'blogs',
    component: BlogsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
