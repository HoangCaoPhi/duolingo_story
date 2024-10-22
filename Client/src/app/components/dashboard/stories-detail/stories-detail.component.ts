import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base-component';
import { StoryService } from 'src/app/services/story.service';
import { takeUntil } from 'rxjs/operators';
import { StoryType } from 'src/app/shared/enum/type-story';
import { Location } from '@angular/common';
import Speech from 'speak-tts';
import { ToastrService } from 'ngx-toastr';

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

  /** Hoàn thành câu chuyện hay chưa ? */
  isCompleteStory = false;

  /** Đường dẫn icon hoàn thành câu chuyện */
  iconComplete: string;

  /** Tên câu chuyện */
  storyName: string;

  html = '';
  result = '';
  speech: any;
  speechData: any;

  @ViewChild('story') private myScrollContainer: ElementRef;

  //#endregion
  constructor(
    private storySV: StoryService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private _location: Location,
    protected toastr: ToastrService
  ) {
    super(toastr);
    // this.imageURL = this.router.getCurrentNavigation()?.extras.state?.imageURL;
    this.initTextToSpeech();
  }

  ngOnInit(): void {
    let id: any = this.activeRouter.snapshot.paramMap.get('id');
    this.getList(id);
  }

  /**
   * Khởi tạo phát âm
   */
  initTextToSpeech() {
    this.speech = new Speech();

    if (this.speech.hasBrowserSupport()) {
      this.speech
        .init({
          volume: 1,
          lang: 'en-GB',
          rate: 1,
          pitch: 1,
          voice: 'Google UK English Male',
          splitSentences: true,
          listeners: {
            onvoiceschanged: (voices: any) => { },
          },
        })
        .then((data: any) => {
          console.log('Speech is ready, voices are available', data);
          this.speechData = data;
          data.voices.forEach((voice: { name: string; lang: string }) => { });
        })
        .catch((e: any) => { });
    }
  }
  /**
   * Phát âm thanh khi ấn vào phát âm
   * @param e Text audio
   */
  playAudio(e: string) {
    this.speech
      .speak({
        text: e,
      })
      .then(() => { })
      .catch((e: any) => { });
  }

  /**
   * Xem chi tiết story
   * @param id ID cua story
   */
  getList(id: number) {
    this.isLoading = true;
    this.storySV
      .getStory(id)
      .pipe(takeUntil(this._onDestroySub))
      .subscribe((data) => {
        this.isLoading = false;
        this.listStoryData = data?.elements;
        this.listStory = [this.listStoryData[this.index]];
        this.maxProgress = this.listStoryData?.length;
        this.iconComplete = data?.illustrations?.gilded;
        this.imageURL = data?.illustrations?.active;
        this.storyName = data?.fromLanguageName;
      });
  }

  /**
   * Xử lý khi ấn tiếp tục
   */
  continue() {

    if (this.isCompleteStory) {
      this.closeStory();
      return;
    }

    this.index++;

    if (this.index === this.listStoryData.length) {
      this.isCompleteStory = true;
    }

    if (this.index <= this.listStoryData.length) {
      this.listStory = [...this.listStory, this.listStoryData[this.index + 1]];
    }

    const listDisable = [StoryType.MULTIPLE_CHOICE, StoryType.POINT_TO_PHRASE, StoryType.ARRANGE, StoryType.MATCH];
    if (
      !this.isDisableButton && listDisable.includes(this.listStoryData[this.index + 1]?.type)
    ) {
      this.isShowButtonActive = false;
      this.isDisableButton = true;
    } else {
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

  /**
   * Auto scroll xuoosgn cuối mỗi lần next câu hỏi
   */
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  /**
   * Có cho phép next bài hay không
   * @param event
   */
  showButtonCotinue(event: any) {
    this.isDisableButton = false;
    this.isShowButtonActive = true;
    this.correctAudio();
  }

  /**
   * Phát audio trả lời chính xác
   */
  correctAudio() {
    let audio = new Audio();
    audio.src = '../../../../assets/audio/correct.mp3';
    audio.load();
    audio.play();
  }

  /**
   * Phát audio trả lời sai đáp án
   */
  wrongAudio() {
    let audio = new Audio();
    audio.src = '../../../../assets/audio/wrong.mp3';
    audio.load();
    audio.play();
  }
}
