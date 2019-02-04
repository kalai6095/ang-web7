import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  service = {}

  constructor(private config: ConfigService) {
  }

  ngOnInit() {
    this.service = this.config.getConfigInfo().services;
  }

}
