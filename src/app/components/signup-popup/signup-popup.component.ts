import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss']
})
export class SignupPopupComponent implements OnInit {
  hide = true;
  signipForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
    ]),
  });
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log('data', data);
  }

  ngOnInit() {
  }

  getrequired = (value) => {
    return this.signipForm.get(value);
  }
}
