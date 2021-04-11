import { Question } from "./question";

export class MultipleChoice {
    answers: Question[];
    correctAnswerIndex: number;
    question: Question;
    trackingProperties: any;
    type: string;
}