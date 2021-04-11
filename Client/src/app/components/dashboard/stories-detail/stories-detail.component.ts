import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base-component';
import { StoryService } from 'src/app/services/story.service';
import { takeUntil } from 'rxjs/operators';
import { StoryType } from 'src/app/shared/enum/type-story';
import {Location} from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.scss'],
})
export class StoriesDetailComponent extends BaseComponent implements OnInit {
  //#region Properties

  /** Disable button khi các câu hỏi cần trả lời mới được tiếp tục */
  isDisableButton = false;

  listStoryData: any;
  listStory: any;

  storyType = StoryType;
  imageURL: string;

  // Khởi tạo lấy story thứ nhất
  index = 0;
  minProgress = 0;
  maxProgress: number;

  isLoading = false;

  isShowButtonActive = false;

  @ViewChild('story') private myScrollContainer: ElementRef;

  //#endregion
  constructor(
    private storySV: StoryService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {
    super();
    this.imageURL = this.router.getCurrentNavigation()?.extras.state?.imageURL;
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
    this.isLoading = true;
    this.storySV.getStory(id)
      .pipe(takeUntil(this._onDestroySub))
      .subscribe((data) => {
        this.isLoading = false;
        this.listStoryData = data?.elements;
        this.listStory = [this.listStoryData[this.index]];
        this.maxProgress = this.listStoryData?.length;
      });
  }

  continue() {
    this.index++;
    this.listStory = [...this.listStory, this.listStoryData[this.index + 1]];

    if (this.listStoryData[this.index + 1]?.type === StoryType.MULTIPLE_CHOICE) {
      this.isDisableButton = true;
    }
    else {
      this.isDisableButton = false;
      this.isShowButtonActive = false;
    }

    setTimeout(() => {
      this.scrollToBottom();
    }, 10);
  }

  /**
   * Đóng bài học
   */
  closeStory() {
    this._location.back();
  }


  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  showButtonCotinue(event: any) {
    this.isDisableButton = false;
    this.isShowButtonActive = true;
  }

}
