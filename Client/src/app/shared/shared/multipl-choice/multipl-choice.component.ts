import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MultipleChoice } from '../../models/multiple-choice/mutilple-choice';
import { Question } from '../../models/multiple-choice/question';

@Component({
  selector: 'app-multipl-choice',
  templateUrl: './multipl-choice.component.html',
  styleUrls: ['./multipl-choice.component.scss']
})
export class MultiplChoiceComponent implements OnInit {

  //#region Properties

  titleQuestion: string;
  answers: Question[];
  // đáp án chính xác
  correctAnswerIndex: number;

  isCorrectAnser = false;

  /** Nếu chọn đúng đáp án rồi thì disable đi */
  isDisable = false;

  @Input() set objectMutilpleChoice(value: MultipleChoice) {

    this.titleQuestion = value.question?.text;

    this.answers = value.answers;

    // Chuân hóa giá trị value grid bằng false
    value.answers?.forEach(element => {
      element.value = false;
    });

    this.correctAnswerIndex = value.correctAnswerIndex;
  }

  /** Bỏ disable nút tiếp tục khi trả lời câu hỏi đúng */
  @Output() isShowContinue = new EventEmitter<boolean>();

  //#endregion

  //#region Life Cycle
  constructor() { }

  ngOnInit(): void {
  }
  //#endregion

  //#region Method
  /**
   * Lựa chọn đáp án cho câu hỏi
   * @param answer 
   */
  selectAnswer(answer: Question, indexSelect: number) {
    if(indexSelect == this.correctAnswerIndex) {
      this.isCorrectAnser = true;
      this.isDisable = true;
      this.isShowContinue.emit(true);
      this.answers?.forEach(element => {
        if(element.text === answer.text) {
          element.value = true;
        }
        else {
          element.value = false;
        }
      });
    }
    else {
      this.isCorrectAnser = false;
    }
  }
  //#endregion
}
