import {Component, NgZone, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/auth/authentication.service";
import * as $ from "jquery";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeTab: string = "Home";

  constructor(private auth: AuthenticationService, private ngzone: NgZone) {
  }

  ngOnInit() {
    this.addNavigation();
  }

  addNavigation() {
    (<any>$)(document).ready(function () {
      /*Responsive Navigation*/
      (<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
      (<any>$)('#nav-trigger span').on('click', function () {
        if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
          (<any>$)('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
          (<any>$)(this).removeClass('open');
        } else {
          (<any>$)('nav#nav-mobile ul').addClass('expanded').slideDown(250);
          (<any>$)(this).addClass('open');
        }
      });

      (<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
      (<any>$)('#nav-mobile ul a').on('click', function () {
        if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
          (<any>$)('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
          (<any>$)('#nav-trigger span').removeClass('open');
        }
      });

      if (!!(<any>$).prototype.stickyNavbar) {
        (<any>$)('#header').stickyNavbar();
      }

      this.ngzone.run(() => {
        (<any>$)('#content').waypoint(function (direction) {
          if (direction === 'down') {
            (<any>$)('#header').addClass('nav-solid fadeInDown');
          } else {
            (<any>$)('#header').removeClass('nav-solid fadeInDown');
          }
        });
      })

    });
  }

  getActiveTab(tabname: string) {
    this.activeTab = tabname;
  }

  logout() {
    this.auth.logout();
  }

}
