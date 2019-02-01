import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { Router } from '@angular/router';

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"]
})
export class BlogsComponent implements OnInit {

  constructor(private router: Router) { }

  blogs: Blog[] = [
    new Blog(
      "Development Ideas",
      "Naveen",
      "You have an idea that you want to develop and you’re convinced that hiring an outsourced team is the best way to move forward. You spent hours researching about the best agencies to work with and shortlist a bunch of them. Now you need to finalize the one that will turn your idea into a reality. The next thing you need to do is create a solid project brief and share it with all the shortlisted agencies, to kick off discussions.",
      1
    ),
    new Blog(
      "Outsourcing a team",
      "Jimi Hendrix",
      "You have an idea that you want to develop and you’re convinced that hiring an outsourced team is the best way to move forward. You spent hours researching about the best agencies to work with and shortlist a bunch of them. Now you need to finalize the one that will turn your idea into a reality. The next thing you need to do is create a solid project brief and share it with all the shortlisted agencies, to kick off discussions.",
      2
    )
  ];

  goToDetailPage(clickedBlog: Blog) {
    this.router.navigate(['blogs', clickedBlog.id])
  }

  ngOnInit() {}
}
