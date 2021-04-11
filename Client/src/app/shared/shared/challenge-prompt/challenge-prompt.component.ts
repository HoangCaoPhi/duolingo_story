import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from '../../models/challenge-prompt/challenge';

@Component({
  selector: 'app-challenge-prompt',
  templateUrl: './challenge-prompt.component.html',
  styleUrls: ['./challenge-prompt.component.scss']
})
export class ChallengePromptComponent implements OnInit {

  titleQuestion: string;

  @Input() set objectChallenge(challenge: Challenge) {
    this.titleQuestion = challenge.prompt.text;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
