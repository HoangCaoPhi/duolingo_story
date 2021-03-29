import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LineComponent } from './line/line.component';
import { MultiplChoiceComponent } from './multipl-choice/multipl-choice.component';
import { ChallengePromptComponent } from './challenge-prompt/challenge-prompt.component';
import { ArrangeComponent } from './arrange/arrange.component';
import { PointToPhraseComponent } from './point-to-phrase/point-to-phrase.component';
import { MatchComponent } from './match/match.component';
import { DxCheckBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [LineComponent, MultiplChoiceComponent, ChallengePromptComponent, ArrangeComponent, PointToPhraseComponent, MatchComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DxCheckBoxModule
  ],
  exports: [LineComponent, MultiplChoiceComponent, ChallengePromptComponent, ArrangeComponent, PointToPhraseComponent, MatchComponent]
})
export class SharedModule { }
