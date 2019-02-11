import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.signupform = this.fb.group({
      'firstname': [null, Validators.email],
      'lastname': [null, Validators.required],
      'email': [null, [Validators.email, Validators.required]],
      'password': [null, Validators.required]
    })
  }

  signup(formData) {
    console.log(formData)
    this.auth.signup(formData).subscribe(data => {
      console.log(data)
      this.router.navigate(['Login'])
    });
  }

}
