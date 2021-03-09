import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../shared/models/Story';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private http: HttpClient) {}

  /**
   * Lấy về danh sách Story
   */
  getList(): Observable<Story[]> {
    return this.http.get<Story[]>(
      'https://carex.uber.space/stories/backend/stories/get_list.php?lang=en&lang_base=it'
    );
  }

  /**
   * Xem chi tiết story
   * @param id ID cua story
   */
  getStory(id: number): Observable<any> {
    return this.http.get<Story[]>(
      `https://carex.uber.space/stories/backend/stories/get_story_json.php?id=${id}`
    );
  }
}
