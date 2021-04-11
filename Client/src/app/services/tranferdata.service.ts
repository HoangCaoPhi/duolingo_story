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

  isShowItem(obj: any) {
    this.arrangeItemData.emit(obj)
  }

  tranferListLanguage(obj: any) {
    this.languageData.emit(obj)
  }

}

