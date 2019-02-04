import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  header = {};

  constructor(private app_config: ConfigService) {

  }

  ngOnInit() {
    this.getHeader();
  }

  getHeader() {
    this.header = this.app_config.getConfigInfo().header;
  }

}
