import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base-component';
import { StoryService } from 'src/app/services/story.service';
import { takeUntil } from 'rxjs/operators';
import { StoryType } from 'src/app/shared/enum/type-story';
@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.scss'],
})
export class StoriesDetailComponent extends BaseComponent implements OnInit {
  //#region Properties

  /** Có hiển thị từ tooltip gợi ý hay không  */
  isShowSuggestWord = false;

  listStoryData: any;

  storyType = StoryType;

  //#endregion
  constructor(
    private storySV: StoryService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    let id: any = this.activeRouter.snapshot.paramMap.get('id');
    this.getList(id);
  }

  /**
   * Xem chi tiết story
   * @param id ID cua story
   */
  getList(id: number) {
    this.storySV.getStory(id)
      .pipe(takeUntil(this._onDestroySub))
      .subscribe((data) => {
        console.log(data);
        this.listStoryData = data?.elements;
      });
  }

  /**
   * Đóng bài học
   */
  closeStory() {
    this.router.navigate(['']);
  }

  /**
   * Đóng mở tooltip gợi ý từ
   */
  toggleTooltip() {
    this.isShowSuggestWord = !this.isShowSuggestWord;
  }
}
