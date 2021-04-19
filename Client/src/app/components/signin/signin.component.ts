import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    $('body').css('overflow', 'hidden');
  }

  ngOnDestroy(): void {
    $('body').css('overflow', 'auto');
  }

  //#region Method

  /**
   * Đăng nhập tài khoản
   * @param e 
   */
  signIn(e: any) {
    let result = e.validationGroup.validate();
    if (result.isValid) {
      // Submit values to the server
      console.log(this.email);
      console.log(this.password);
    }
  }

  /**
   * Điều hướng ra màn hình đăng ký
   * @returns 
   */
  signUp() {
    this.router.navigate(['signup']);
    return false;
  }

  /**
  * Quay lại trang chủ
  */
  goToHome() {
    this.router.navigate(['']);
  }
  //#endregion

}
