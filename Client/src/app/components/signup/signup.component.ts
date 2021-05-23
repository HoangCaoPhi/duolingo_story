import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from 'src/app/base/base-component';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends BaseComponent implements OnInit {

  userName: string;
  email: string;
  password: string;

  /** đã gửi mail kích hoạt hay chưa */
  isRegisterSuccess = false;

  constructor(private router: Router, private auth: AuthService, protected toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit(): void {
    $('body').css('overflow', 'hidden');
  }

  ngOnDestroy(): void {
    $('body').css('overflow', 'auto');
  }

  /**
   * Đăng ký tài khoản
   * @param e 
   */
  signUp(e: any) {
    let result = e.validationGroup.validate();
    if (result.isValid) {

        const user = {
          username: this.userName,
          password: this.password,
          email: this.email
        };
        
        this.auth.register(user).subscribe(
          (data) => {
            // this.isRegisterSuccess = true;
            if(data === 200) {
              this.showToaster("Đăng ký tài khoản thành công!");
              this.router.navigate(['signin']);
            }
          }
        )


    }
  }

  /**
   * Quay lại trang chủ
   */
  goToHome() {
    this.router.navigate(['']);
  }
}
