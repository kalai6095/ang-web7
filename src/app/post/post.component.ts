import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";
import {PagerService} from "../pager.service";
import {Post} from "../Post";
import {pipe} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // @Input()posts = {};

  posts = [];
  allItems: any;
  pages: any[];
  pageSize = 4;
  pager: any = {};

  constructor(private config: ConfigService, private pagerService: PagerService) {
  }

  ngOnInit() {
    //this.posts = this.config.getConfigInfo().posts;
    this.getPosts();
    //this.allItems = this.posts["lists"];
    //this.setPage(1);
  }

  getPosts() {
    this.config.getPost().subscribe(
      posts => {
        this.posts = posts;
        this.allItems = this.posts;
        this.setPage(1);

      }
    );
  }

  setPage(pageNumber: number) {
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex);
  }

}
