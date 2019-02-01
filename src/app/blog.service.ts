import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";


@Injectable({
  providedIn: "root"
})
export class BlogService {
  blogs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.blogs = database.list("blogs");
  }

  // Returns all blogs
  getBlogs() {
    return this.blogs;
  }

  addBlog(newBlog: Blog) {
    this.blogs.push(newBlog);
  }

  // Grabs specific blog by it's id
  getBlogById(blogId: number) {
    // for (let i = 0; i <= BLOGS.length; i++) {
    //   if (BLOGS[i].id === blogId) {
    //     return BLOGS[i];
    //   }
    // }
  }
}
