import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base-component';
import { StoryService } from 'src/app/services/story.service';
import { TranferdataService } from 'src/app/services/tranferdata.service';
import { Story } from 'src/app/shared/models/Story';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends BaseComponent implements OnInit {
  //#region Properties

  listStory: Story[];

  listLanguage: any[];

  isLoading = false;

  /* Có hiển thị danh sách ngôn ngữ hay không */
  isShowListLanguage = true;

  //#endregion

  //#region Contructor

  constructor(private router: Router, private storySV: StoryService, private route: ActivatedRoute, private tranferData: TranferdataService) {
    super();
  }

  ngOnInit(): void {
    this.getLanguage();

    this.route.queryParams
      .subscribe(params => {
        if(params.lang) {
          this.isShowListLanguage = false;
        }
      }
      );
  }
  //#endregion

  //#region Method



  /**
   * Mở câu chuyện theo từng ngôn ngữ
   * @param story 
   */
  openStory(story: any) {
    this.isShowListLanguage = false;
    this.router.navigate(['/languages/stories'], { queryParams: { lang: story.short, lang_base: 'en' }, queryParamsHandling: 'merge' });
  }

  /**
   * Lấy về danh sách ngôn ngữ
   */
  getLanguage() {
    this.isLoading = true;
    this.storySV.getLanguages()
      .pipe(takeUntil(this._onDestroySub))
      .subscribe((data) => {
        this.listLanguage = data;
        this.tranferData.tranferListLanguage(data);
        this.isLoading = false;
      });
  }

  /**
   * Ẩn ngôn ngữ
   * @param e 
   */
  hiddenLang(e: any) {
    this.isShowListLanguage = false;
  }

  //#endregion
}
