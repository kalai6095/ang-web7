import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/auth/authentication.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeTab: string = "Home";

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
  }


  getActiveTab(tabname: string) {
    this.activeTab = tabname;
  }

  logout() {
    this.auth.logout();
  }

}
