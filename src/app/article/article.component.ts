import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = {};
  id: any;

  constructor(private route: ActivatedRoute, private config: ConfigService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    let posts_lists = this.config.getConfigInfo().posts.lists;
    /*filter callback function element,index,array*/
    this.article = posts_lists.filter((e, i, a) => {
      return e.id === this.id;
    })[0];
    console.log(this.article);
  }

}
