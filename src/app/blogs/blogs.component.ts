import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { FirebaseListObservable } from "angularfire2/database";


@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"],
  providers: [BlogService]
})
export class BlogsComponent implements OnInit {
  blogs: FirebaseListObservable<any[]>;

  constructor(private router: Router, private blogService: BlogService) {}

  // Tells page to list all blogs when page loads
  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  // Click on blog to see details of blog
  goToDetailPage(clickedBlog: Blog) {
    this.router.navigate(["blogs", clickedBlog.id]);
  }
}
