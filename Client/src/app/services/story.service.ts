import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/common/config.service';
import { HttpService } from 'src/common/http.service';
import { AppConfig } from '../shared/models/config/app.config';
import { Story } from '../shared/models/Story';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private http: HttpService) {}

  hostApi = (ConfigService.settings as AppConfig).apiServer;

  /**
   * Lấy về danh sách Story
   */
  getList(lang: string, lang_base: string): Observable<Story[]> {
    return this.http.get(`${this.hostApi}/Course/getListCourse?learnlang=${lang}&fromlang=${lang_base}`); 
  }

  /**
   * Xem chi tiết story
   * @param id ID cua story
   */
  getStory(id: number): Observable<any> {
    return this.http.get(`${this.hostApi}/Story/json/${id}`); 
  }

  /**
   * Lấy danh sách ngôn ngữ
   * @param id 
   * @returns 
   */
  getLanguages(): Observable<any> {
    return this.http.get(`${this.hostApi}/Language/getall`);
  }


}
