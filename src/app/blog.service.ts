import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { BLOGS } from './mock-blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogs() {
    return BLOGS;
  }
}
