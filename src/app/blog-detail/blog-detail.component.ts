import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Blog } from "../blog.model";
import { BlogService } from "../blog.service";



@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.css"],
  providers: [BlogService]
})
export class BlogDetailComponent implements OnInit {
  blogId: number = null;
  blogToDisplay: Blog;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService: BlogService
  ) {}

  //Logic to retrieve the specifc blog that BlogDetailComp should display from service
  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.blogId = parseInt(urlParameters["id"]);
    });
    this.blogToDisplay = this.blogService.getBlogById(this.blogId);
  }
}
