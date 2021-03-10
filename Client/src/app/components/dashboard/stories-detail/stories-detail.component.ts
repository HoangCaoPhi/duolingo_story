import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.scss'],
})
export class StoriesDetailComponent implements OnInit {
  constructor(
    private storySV: StoryService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: any = this.activeRouter.snapshot.paramMap.get('id');
    this.getList(id);
  }

  /**
   * Xem chi tiết story
   * @param id ID cua story
   */
  getList(id: number) {
    this.storySV.getStory(id).subscribe((data) => {
      console.log(data);
    });
  }

  /**
   * Đóng bài học
   */
  closeStory() {
    this.router.navigate(['']);
  }
}
