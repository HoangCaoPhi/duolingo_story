import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base-component';
import { AuthService } from 'src/app/services/auth.service';
import { TranferdataService } from 'src/app/services/tranferdata.service';
import { User } from 'src/app/shared/models/user/user';

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

  constructor(private router: Router, private auth: AuthService, protected toastr: ToastrService, private tranferSV: TranferdataService) {
    super(toastr);
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

      const user = {
        username: this.email,
        password: this.password
      };

      this.auth.checkAuth(user)
        .pipe(takeUntil(this._onDestroySub))
        .subscribe(
          (data: any) => {
            // console.log(data);
            if(data?.statusCode === 200) {
              this.showToaster("Đăng nhập thành công!");
              this.goToHome();
              localStorage.setItem('UserInfo', JSON.stringify(data?.data));

              AuthService.userName = data?.data?.username;

              this.tranferSV.tranferUserInfo(data?.data?.username);

            }
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
