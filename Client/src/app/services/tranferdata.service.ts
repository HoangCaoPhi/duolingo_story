import { EventEmitter, Injectable, Injector, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranferdataService {

  constructor() { }

  @Input()
  arrangeItemData = new EventEmitter<string>();

  @Input()
  languageData = new EventEmitter<string>();

  @Input()
  userName = new EventEmitter<string>();

  isShowItem(obj: any) {
    this.arrangeItemData.emit(obj)
  }

  tranferListLanguage(obj: any) {
    this.languageData.emit(obj)
  }

  tranferUserInfo(userName: string) {
    this.userName.emit(userName);
  }

}

