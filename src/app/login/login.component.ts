import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/auth/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  returnUrl: string;

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.loginform = this.fb.group({
      'email': [null, [Validators.email, Validators.required]],
      'password': [null, Validators.required]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(formData) {
    console.log(formData)
    this.auth.login(formData).subscribe(data => {
      // console.log(data);
      //alert(this.returnUrl)
      //this.router.navigate([this.returnUrl]);
      this.router.navigate([this.returnUrl]);
    });
  }

}
