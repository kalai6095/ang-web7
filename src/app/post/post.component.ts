import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = {};

  constructor(private config:ConfigService) {
  }

  ngOnInit() {
    this.posts=this.config.getConfigInfo().posts;
  }

}
