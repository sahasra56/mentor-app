import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  data: any = {
    "objUserData": {
      "user_id": 1,
    }
  }

  constructor(
  ) {
  }

  setSessionObj(key: string, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  getSessionObj(key: string) {
    return JSON.parse(sessionStorage.getItem(key) || '');
  }
}
