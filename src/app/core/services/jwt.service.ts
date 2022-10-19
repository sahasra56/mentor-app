import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable()
export class JwtService {

  constructor(private appConfigService: AppConfigService){

  }

  getToken(): String {
    try {
      // return window.localStorage['userInfo'].token;
      if (this.appConfigService.getSessionObj('userInfo') && this.appConfigService.getSessionObj('userInfo').token) {
        return this.appConfigService.getSessionObj('userInfo').token;
      }
      return '';
    } catch (error) {
      return '';
    }
  }

  saveToken(token: String) {
    window.localStorage['userInfo'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('userInfo');
  }

}
