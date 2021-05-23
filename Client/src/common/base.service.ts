import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/shared/models/config/app.config';
import { ConfigService } from './config.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected hostApi;

  constructor(
    protected http: HttpService,
    protected controller: string
  ) {
    this.hostApi = (ConfigService.settings as AppConfig).apiServer;
  }

  // lấy về chuỗi url
  getApiURL() {
    const lastCharacter = this.hostApi.substr(this.hostApi.length - 1);
    if (lastCharacter === '/') {
      return `${this.hostApi}${this.controller}`;
    }
    return `${this.hostApi}/${this.controller}`;
  }

}
