import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/shared/models/config/app.config';
import { StoryConfig } from 'src/app/shared/models/config/story-config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService<T extends AppConfig> {

  public static settings: StoryConfig;

  constructor(protected http: HttpClient) { }

  // lấy file config
  load() {
    const jsonFile = `assets/config/config.${environment.name}.json`;
    return new Promise<void>((resolve, rejects) => {
      this.http.get(jsonFile).toPromise().then((response: any) => {
        ConfigService.settings = response as StoryConfig;
        resolve();
      }).catch((response: any) => {
        rejects(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}