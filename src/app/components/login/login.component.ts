import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  Loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });

  constructor() { }

  ngOnInit() {
  }
  getrequired = (value) => {
    return this.Loginform.get(value);
  }
  userLogin = (loginData: any) => {
  //   this.authService.isProgressStatus(true);
  //   this.userEmailforResend = loginData.email.trim();
  //   this.userPasswordforResend = loginData.password.trim();
  //   this.authService.login(loginData)
  //       .subscribe(
  //         (result: {data: string}) => {
  //           localStorage.setItem('token', result.data);
  //           const currentUser = this.authService.currentUser();
  //           if (this.isSeenTutorial === true || currentUser.hasSeenTutorial === true) {
  //             // this.router.navigateByUrl('/dashboard/evidences');
  //             this.router.navigateByUrl('/pmf-list');
  //           } else {
  //             this.router.navigateByUrl('');
  //           }
  //           this.errorResponse = '';
  //           this.showResend = false;
  //           this.authService.isProgressStatus(false);
  //         },
  //         error => {
  //           this.authService.isProgressStatus(false);
  //           this.showResend = false;
  //           if (error.error.code === 401) {
  //             this.errorResponse = 'Wrong email or password.';
  //           } else if (error.error.code === 404) {
  //             this.errorResponse = 'Email not registered.';
  //           } else if (error.error.code === 403) {
  //               if (error.error.message === 'EMAIL_NOT_VERIFIED') {
  //                 this.errorResponse = 'Please verify your email address.';
  //                 this.showResend = true;
  //               } else if (error.error.message === 'ACCOUNT_NOT_APPROVED') {
  //                 this.errorResponse = 'Login failed. Please contact our support at support@inventurist.com.';
  //               }
  //           }
  //         }
  //       );
  }

}
