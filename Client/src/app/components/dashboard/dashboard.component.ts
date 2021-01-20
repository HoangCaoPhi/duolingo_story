import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //#region Properties
  //#endregion

  //#region Contructor

  listStory = [
    {
      IconID: 1,
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    },
    {
      IconID: 2,
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    },
    {
      IconID: 3,
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    },
    {
      IconID: 4,
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  //#endregion
  
  //#region Method
  openStoriesDetail(storiesID: number) {
    this.router.navigate(['/stories', storiesID]);
  }
  //#endregion
}
