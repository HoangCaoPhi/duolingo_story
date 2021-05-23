import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base-component';
import { TranferdataService } from 'src/app/services/tranferdata.service';
import { LineType } from '../../enum/line-type';
import { Hint } from '../../models/hint';
import { HideRange } from '../../models/line/hide-range';
import { TrackingProperties } from '../../models/tracking-properties';

/**
 * Component chứa hình ảnh và câu chuyện
 */
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent extends BaseComponent implements OnInit {

  //#region Properties

  avatarUrl: string;

  contentText: string;

  hintMap: Hint[];

  hints: string[];

  /** Nội dung của từ gợi ý */
  hintText: string;

  currentTarget: string;

  isShowSuggestWord = false;

  // Danh sách các từ bóc tách để hiển thị gợi ý
  listArrText: any[] = [];

  lineType: string;

  lintTypeConstant = LineType;

  // ẩn đoạn text từ đâu đến đâu
  hideRangesForChallenge: HideRange;

  /** Vị trí của đoạn tiếng anh và loại */
  trackingProperties: TrackingProperties;

  @Input() set lineObject(item: any) {
    this.avatarUrl = item?.line.avatarUrl;
    this.contentText = item?.line.content.text;
    this.hintMap = item?.line.content.hintMap;
    this.hints = item?.line.content.hints;
    this.lineType = item?.line.type;
    this.hideRangesForChallenge = item?.hideRangesForChallenge;
    this.trackingProperties = item?.trackingProperties;

    this.hintMap.forEach(hint => {
      const text = this.contentText.slice(hint.rangeFrom, hint.rangeTo + 1);
      const objectShow = {
        Text: text,
        Hide: false
      }
      if (this.hideRangesForChallenge && this.hideRangesForChallenge.end) {
        if (hint.rangeFrom >= this.hideRangesForChallenge.start && hint.rangeTo < this.hideRangesForChallenge.end) {
          objectShow.Hide = true;
        }
      }
      this.listArrText.push(objectShow);
    });
  }

  /** Truyền Text để phát âm audio */
  @Output() emitTextAudio = new EventEmitter<string>();

  //#endregion
  constructor(private tranferDataSV: TranferdataService, protected toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit(): void {
    this.listenShowItem();
  }

  //#region Method

  toggleTooltip(e: any, index: number) {
    this.currentTarget = e.currentTarget;
    this.hintText = this.hints[index];
    this.isShowSuggestWord = !this.isShowSuggestWord;
  }

  listenShowItem() {
    this.tranferDataSV.arrangeItemData.pipe(takeUntil(this._onDestroySub)).subscribe(
      (data: any) => {

        if (data?.LineIndex === this.trackingProperties.line_index) {
          for (let index = 0; index < this.listArrText.length; index++) {
            const element = this.listArrText[index];
            if (element.Text === data?.Value) {
              element.Hide = false;
            }
          }
        }

      }
    )
  }

  /**
   * Truyền nội dung để phát audio 
   */
  playAudio() {
    this.emitTextAudio.emit(this.contentText);
  }

  //#endregion

}
