import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PointToPhrase } from '../../models/point-to-phrase/point-to-phrase';
import { Selected } from '../../models/point-to-phrase/selected';

@Component({
  selector: 'app-point-to-phrase',
  templateUrl: './point-to-phrase.component.html',
  styleUrls: ['./point-to-phrase.component.scss']
})
export class PointToPhraseComponent implements OnInit {

  //#region Properties

  titleQuestion: string;

  selectedPhrase: Selected[];

  /** Vị trí của câu trả lời đúng */
  correctAnswerIndex: number;

  /** Danh sách những đáp án có thể lựa chọn */
  listQuestion: Selected[];

  /** Đáp án chính xác */
  textAnwer: string;


  @Input() set objectPointToPrase(value: PointToPhrase) {

    this.titleQuestion = value.question.text;

    this.selectedPhrase = value.transcriptParts;

    this.listQuestion = this.selectedPhrase?.filter(x => x.selectable === true);

    if (this.listQuestion) {
      this.selectedPhrase.forEach(element => {
        element.isWrong = false;
        element.isCorrect = false;
      });
      this.textAnwer = this.listQuestion[value.correctAnswerIndex].text;
    }
  }
  /** Bỏ disable nút tiếp tục khi trả lời câu hỏi đúng */
  @Output() isShowContinue = new EventEmitter<boolean>();

  //#endregion
  constructor() { }

  ngOnInit(): void {
  }

  //#region Method
  selectWord(word: string, postion: number) {
    if (word === this.textAnwer) {
      this.selectedPhrase[postion].isWrong = false;
      this.selectedPhrase[postion].isCorrect = true;
      this.isShowContinue.emit(true);
    }
    else {
      this.selectedPhrase[postion].isWrong = true;
    }
  }
  //#endregion

}
