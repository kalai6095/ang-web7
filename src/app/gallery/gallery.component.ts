import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";
import * as $ from "jquery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery = [];

  constructor(private config: ConfigService) {
  }

  ngOnInit() {
    this.gallery = this.config.getConfigInfo().gallery.childs;
  }

}
