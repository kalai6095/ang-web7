import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConfigService} from "../config.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = {};
  id: any;

  constructor(private route: ActivatedRoute, private config: ConfigService,private location:Location) {
  }

  getArticle(){
    this.id = this.route.snapshot.paramMap.get("id")
    this.config.getPostById(this.id).subscribe(
      post=>{
        this.article=post;
      }
    )
  }

  ngOnInit() {
    this.getArticle();


    /*filter callback function element,index,array*/
   /* this.article = posts_lists.filter((e, i, a) => {
      return e.id === this.id;
    })[0];*/
    console.log(this.article);
  }


  goBack(){
    this.location.back();
  }

}
