
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/common/config.service';
import { HttpService } from 'src/common/http.service';
import { AppConfig } from '../shared/models/config/app.config';
import { User } from '../shared/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  static userName: string;

  hostApi = (ConfigService.settings as AppConfig).apiServer;

  checkAuth(user: any) {
    return this.http.post(`${this.hostApi}/User/checkUser `, user); 
  }

  getLogin() {
    return this.http.get(
      `https://carex.uber.space/stories/backend/user/get_login.php`
    );
  }

  register(user: any) {
    return this.http.post(`${this.hostApi}/User/adduser `, user);
  }
  
}
