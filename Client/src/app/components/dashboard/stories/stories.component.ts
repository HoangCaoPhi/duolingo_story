import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base-component';
import { StoryService } from 'src/app/services/story.service';
import { Story } from 'src/app/shared/models/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent extends BaseComponent implements OnInit {

  isLoading = false;

  listStory: Story[];

  @Output() isHiddenLang = new EventEmitter<boolean>();

  constructor(private storySV: StoryService, private router: Router, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.getList(params?.lang, params?.lang_base);
        this.isHiddenLang.emit(true);
      }
    );
  }

  //#region Method
  /**
   * Lấy về danh sách Story
   */
  getList(lang: string, lang_base: string) {
    this.isLoading = true;
    this.storySV.getList(lang, lang_base)
      .pipe(takeUntil(this._onDestroySub))
      .subscribe((data) => {
        this.listStory = data;
        this.isLoading = false;
      });
  }

  /**
   * Mở chi tiết từng câu chuyện
   * @param storiesID : ID câu chuyện
   * @param imageURL 
   */
  openStoriesDetail(storiesID: number, imageURL: string) {
    this.router.navigate(['/languages/stories', storiesID], { state: { imageURL: imageURL } });
  }

  //#endregion

}
