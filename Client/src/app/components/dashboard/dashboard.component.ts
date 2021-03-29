import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base-component';
import { StoryService } from 'src/app/services/story.service';
import { Story } from 'src/app/shared/models/Story';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends BaseComponent implements OnInit {
  //#region Properties

  listStory: Story[] | undefined;

  //#endregion

  //#region Contructor
 
  constructor(private router: Router, private storySV: StoryService) {
    super();
  }

  ngOnInit(): void {
    this.getList();
  }
  //#endregion

  //#region Method
  openStoriesDetail(storiesID: number) {
    this.router.navigate(['/stories', storiesID]);
  }

  /**
   * Lấy về danh sách Story
   */
  getList() {
    this.storySV.getList()
    .pipe(takeUntil(this._onDestroySub))
    .subscribe((data) => {
      this.listStory = data;
    });
  }
  //#endregion
}
