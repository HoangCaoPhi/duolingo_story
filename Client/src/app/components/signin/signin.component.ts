import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base-component';
import { AuthService } from 'src/app/services/auth.service';

declare var $: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends BaseComponent implements OnInit, OnDestroy {

  email: string;
  password: string;
  isShowError = false;

  constructor(private router: Router, private auth: AuthService) { 
    super();
  }

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
      this.auth.checkAuth(this.email, this.password)
      .pipe(takeUntil(this._onDestroySub))
      .subscribe(
        (data) => {
          console.log(data);
          this.isShowError = false;
          this.auth.getLogin().subscribe(
            (data) => {
              console.log(data);
            }
          )
        },
        (err)=> {
          this.auth.getLogin().subscribe(
            (data) => {
              console.log(data);
            }
          )
        }
      )

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
