import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../shared/models/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  checkAuth(userName: string, passWord: string) {
    return this.http.get(
      `https://carex.uber.space/stories/backend/user/check_auth.php?username=${userName}&password=${passWord}`
    );
  }

  getLogin() {
    return this.http.get(
      `https://carex.uber.space/stories/backend/user/get_login.php`
    );
  }

  register(formData: any) {
    return this.http.post(
      `https://carex.uber.space/stories/backend/user/register_send.php`, formData
    );
  }
}
