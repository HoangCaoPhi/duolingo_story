import { Question } from "../multiple-choice/question";
import { Selected } from "./selected";

export class PointToPhrase {
    correctAnswerIndex: number;
    question: Question;
    trackingProperties: any;
    transcriptParts: Selected[];
    type: string;
}