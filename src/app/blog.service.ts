import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { BLOGS } from './mock-blogs';
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // blogs: FirebaseListObservable<any[]>

  constructor() { }

  // Returns all blogs
  getBlogs() {
    return BLOGS;
  }

  // Grabs specific blog by it's id
  getBlogById(blogId: number) {
    for(let i=0; i <= BLOGS.length; i++) {
      if(BLOGS[i].id === blogId) {
        return BLOGS[i];
      }
    }
  }
}
