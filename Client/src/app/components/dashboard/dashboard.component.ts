import { Component, OnInit } from '@angular/core';

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
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    },
    {
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    },
    {
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    },
    {
      IconName : "icon-good-morning",
      IconText: "Good Morning",
      IconXP: "14XP"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  //#endregion
  
  //#region Method
  //#endregion
}
