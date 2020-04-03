import { UserService } from './../../service/user.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { _ } from 'lodash';
@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss']
})
export class SignupPopupComponent implements OnInit {
  hide = true;
  hideConfirm = true;
  signipForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&#^])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
    ]),
  });
  passwordNotMatch: boolean;
  registered: boolean;
  errorMessage: any;
  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  getrequired = (value) => {
    return this.signipForm.get(value);
  }

  userRegistration = (data) => {
    this.passwordNotMatch = false;
    this.registered = false;
    this.errorMessage = '';
    if (data.password === data.confirmpassword) {
      const pickData = _.pick(data, ['name', 'email', 'password']);
      this.userService.userRegister(pickData).subscribe( result => {
        this.registered = true;
      }, error => {
        this.errorMessage = error.error.message;
      });
    } else {
      this.passwordNotMatch = true;
    }
  }
}
