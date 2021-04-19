import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

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
        // Submit values to the server
        console.log(this.email);
        console.log(this.password);
        console.log(this.userName);
    }
  }

  /**
   * Quay lại trang chủ
   */
  goToHome() {
    this.router.navigate(['']);
  }
}
