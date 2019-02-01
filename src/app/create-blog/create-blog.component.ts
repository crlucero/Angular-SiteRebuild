import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blog.service";
import { Blog } from "../blog.model";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
  providers: [BlogService]
})
export class CreateBlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }
  // Submits form to create a new blog
  submitForm(title: string, name: string, description: string) {
    let newBlog = new Blog(title, name, description);
    this.blogService.addBlog(newBlog);
    console.log(newBlog);
    
  }

}
