import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from 'src/app/services/story.service';
import { Story } from 'src/app/shared/models/Story';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //#region Properties

  listStory: Story[] | undefined;

  //#endregion

  //#region Contructor

  // listStory = [
  //   {
  //     IconID: 1,
  //     IconName : "icon-good-morning",
  //     IconText: "Good Morning",
  //     IconXP: "14XP"
  //   },
  //   {
  //     IconID: 2,
  //     IconName : "icon-good-morning",
  //     IconText: "Good Morning",
  //     IconXP: "14XP"
  //   },
  //   {
  //     IconID: 3,
  //     IconName : "icon-good-morning",
  //     IconText: "Good Morning",
  //     IconXP: "14XP"
  //   },
  //   {
  //     IconID: 4,
  //     IconName : "icon-good-morning",
  //     IconText: "Good Morning",
  //     IconXP: "14XP"
  //   }
  // ]

  constructor(private router: Router, private storySV: StoryService) {}

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
    this.storySV.getList().subscribe((data) => {
      this.listStory = data;
    });
  }
  //#endregion
}
