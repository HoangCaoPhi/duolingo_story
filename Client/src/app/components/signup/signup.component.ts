import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userName: string;
  email: string;
  password: string;

  /** đã gửi mail kích hoạt hay chưa */
  isRegisterSuccess = false;

  constructor(private router: Router, private auth: AuthService) { }

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

        const formData = new FormData();
        formData.append('username', this.userName);
        formData.append('password', this.password);
        formData.append('email', this.email);
        
        this.auth.register(formData).subscribe(
          (data) => {
            this.isRegisterSuccess = true;
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
