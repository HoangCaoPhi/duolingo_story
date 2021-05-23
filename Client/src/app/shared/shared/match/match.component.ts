import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Match } from '../../models/match/match';
import { PraseMatch } from '../../models/match/phrase-match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  titleQuestion: string;
  match: Match;
  fallbackHints: PraseMatch[];

  // danh sách những từ hiển thị
  listWord: any[] = [];

  wordSelected: string;

  // vị trí chọn từ
  postionSelected: number;

  // có phải lần đầu chọn hay không
  firstSelected = 0;

  @Input() set objectMatch(value: Match) {
    this.titleQuestion = value.prompt;
    this.fallbackHints = value.fallbackHints;

    this.fallbackHints.forEach(element => {

      const objectParse = {
        Value: element.phrase,
        IsSelected: false,
        IsWrong: false,
        IsExact: false
      }

      const objectTranslate = {
        Value: element.translation,
        IsSelected: false,
        IsWrong: false,
        IsExact: false
      }

      this.listWord.push(objectParse);
      this.listWord.push(objectTranslate);
    });

    this.shuffle(this.listWord);
  }

  /** Bỏ disable nút tiếp tục khi trả lời câu hỏi đúng */
  @Output() isShowContinue = new EventEmitter<boolean>();

  /** Số câu trả lời đúng */
  numberCorrect = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //#region Method

  getRandom() {
    let random_seed = 1234;
    random_seed = Math.sin(random_seed) * 10000;
    return random_seed - Math.floor(random_seed);
  }

  shuffle(a: any) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this.getRandom() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // Object chứa 2 phần tử xử lý
  arrayWord: any = []
  selectedWord(word: string, postion: number) {

    // Object chứa 2 phần tử xử lý
    const itemWord = {
      Value: word,
      Postion: postion
    }
    this.arrayWord.push(itemWord);

    this.listWord[postion].IsSelected = true;

    if (this.arrayWord.length === 2) {

      // Từ dùng để so sánh xem 2 lựa chọn có đúng hay không
      let wordCompare;

      // Tìm kiếm translate của từ phần tử thứ nhất
      this.fallbackHints.forEach(element => {
        if (element.phrase === this.arrayWord[0].Value) {
          wordCompare = element.translation;
        }
        if (element.translation === this.arrayWord[0].Value) {
          wordCompare = element.phrase;
        }
      });

      if (this.arrayWord[1].Value === wordCompare) {
        this.numberCorrect++;
        this.listWord[this.arrayWord[0].Postion].IsSelected = false;
        this.listWord[this.arrayWord[1].Postion].IsSelected = false;
        this.listWord[this.arrayWord[0].Postion].IsExact = true;
        this.listWord[this.arrayWord[1].Postion].IsExact = true;

        if(this.numberCorrect === this.fallbackHints.length) {
          this.isShowContinue.emit(true);
        }
      }
      else {
        this.listWord[this.arrayWord[0].Postion].IsWrong = true;
        this.listWord[this.arrayWord[1].Postion].IsWrong = true;
        this.listWord[this.arrayWord[0].Postion].IsSelected = false;
        this.listWord[this.arrayWord[1].Postion].IsSelected = false;
      }

      setTimeout(() => {
        this.listWord[this.arrayWord[0].Postion].IsWrong = false;
        this.listWord[this.arrayWord[1].Postion].IsWrong = false;
        this.arrayWord = [];
      }, 500);


    }
  }
  //#endregion

}
