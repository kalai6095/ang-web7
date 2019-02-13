import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Namari';

  ngOnInit(): void {
    /* Parallax Effects */
    if (!!(<any>$).prototype.enllax) {
      (<any>$)(window).enllax();
    }
    /* Video Lightbox */
    if (!!(<any>$).prototype.simpleLightboxVideo) {
      (<any>$)('.video').simpleLightboxVideo();
    }

    /*ScrollUp*/
    if (!!(<any>$).prototype.scrollUp) {
      (<any>$).scrollUp();
    }
  }
}
