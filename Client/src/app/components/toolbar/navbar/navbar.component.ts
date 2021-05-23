import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base-component';
import { AuthService } from 'src/app/services/auth.service';
import { TranferdataService } from 'src/app/services/tranferdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseComponent implements OnInit {

  isVisiblePopover = false;

  listLanguage: any;

  /** Ngôn ngữ hiện tại là gì */
  currentLanguage: string;
  currentStyle: string;

  userName: string;

  constructor(private router: Router, private tranferDataSV: TranferdataService, protected toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit(): void {
    this.tranferDataSV.languageData.pipe(takeUntil(this._onDestroySub)).subscribe(
      (data: any) => {
        this.listLanguage = data;
        this.currentLanguage = this.listLanguage[0].name;
        this.currentStyle = `background-position: 0px ${this.listLanguage[0].flag}px`;
      }
    )

    this.tranferDataSV.userName.subscribe(
      (data: string) => {
        this.userName = data;
      }
    )

    if(AuthService.userName) {
      this.userName = AuthService.userName;
    }
    else {
      const userInfo = localStorage.getItem('UserInfo');
      if(userInfo) {
        this.userName = JSON.parse(userInfo)?.username;
      }
    }


  }

  openHome() {
    window.location.href = "/stories";
  }

  /** Mở popup ngôn ngữ */
  openLang() {
    this.isVisiblePopover = true;
  }

  /** Thay đổi cờ */
  changeBackground(item: any): any {
    return { 'background-position': `0px ${item.flag}px` };
  }

  /** Sử kiện chọn ngôn ngữ */
  selectLanguage(item: any) {
    this.currentLanguage = item.name;
    this.currentStyle = `background-position: 0px ${item.flag}px`;
    this.router.navigate(['/languages/stories'], { queryParams: { lang: item.short, lang_base: 'en' }, queryParamsHandling: 'merge' });
    this.isVisiblePopover = false;
  }

  singIn() {
    this.router.navigate(['/signin']);
  }

  singOut() {
    AuthService.userName = "";
    localStorage.removeItem('UserInfo');
    window.location.reload();
  }
}
