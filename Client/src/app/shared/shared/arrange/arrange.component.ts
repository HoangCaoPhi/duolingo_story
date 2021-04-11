import { Component, Input, OnInit } from '@angular/core';
import { TranferdataService } from 'src/app/services/tranferdata.service';
import { Arrange } from '../../models/arrange/arrange';
import { TrackingProperties } from '../../models/tracking-properties';

@Component({
  selector: 'app-arrange',
  templateUrl: './arrange.component.html',
  styleUrls: ['./arrange.component.scss']
})
export class ArrangeComponent implements OnInit {

  selectablePhrases: any[] = [];

  /* Vị trí sắp xếp của từ */
  phraseOrder: [];

  /** Vị trí của phần tử cần chọn */
  currentIndex = 0;

  /** Lựa chọn lỗi hay không */
  isWrong = false;

  currentItem: string;

  /** Vị trí của đoạn tiếng anh và loại */
  trackingProperties: TrackingProperties;

  @Input() set objectArrange(value: Arrange) {

    if (value.selectablePhrases) {
      value.selectablePhrases.forEach(element => {
        const object = {
          Value: element,
          IsShow: true
        }
        this.selectablePhrases.push(object);
      });
    }
    this.phraseOrder = value.phraseOrder;
    this.trackingProperties = value.trackingProperties;
  }

  constructor(private tranferDataSV: TranferdataService) { }

  ngOnInit(): void {
  }

  //#region Method

  /**
   * Chọn từ sắp xếp
   */
  selectedItem(item: string, index: number) {
    const a = this.phraseOrder.findIndex((x) => x === this.currentIndex);
    this.currentItem = item;
    if (a == index && this.currentIndex < this.phraseOrder.length + 1) {
      // this.selectablePhrases = this.selectablePhrases.filter(x => x !== item);
      this.isWrong = false;
      this.selectablePhrases[index].IsShow = false;

      // Tranfer object cho component line
      const objectTranfer = {
        Value: item,
        LineIndex: this.trackingProperties.line_index
      }

      this.tranferDataSV.isShowItem(objectTranfer);
      
      this.currentIndex++;
    }
    else {
      this.isWrong = true;
    }
  }
  //#endregion
}
