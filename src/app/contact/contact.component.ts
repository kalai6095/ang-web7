import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactusForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [Validators.email, Validators.required]],
      'message': [null, Validators.required]
    })
  }

  sendMessage(formData) {
    console.log(formData)
  }

}
