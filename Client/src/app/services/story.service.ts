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
  getList(lang: string, lang_base: string): Observable<Story[]> {
    return this.http.get<Story[]>(
      `https://carex.uber.space/stories/backend/stories/get_list.php?lang=${lang}&lang_base=${lang_base}`
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

  /**
   * Lấy danh sách ngôn ngữ
   * @param id 
   * @returns 
   */
  getLanguages(): Observable<any> {
    return this.http.get<any[]>(
      `  https://carex.uber.space/stories/backend/stories/get_languages.php`
    );
  }


}
