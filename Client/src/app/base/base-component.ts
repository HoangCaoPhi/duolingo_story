import { OnDestroy, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject, Subscription } from "rxjs";

export class BaseComponent implements OnDestroy, OnInit {
    constructor(protected toastr: ToastrService) {

    }

    public _onDestroySub: Subject<void> = new Subject<void>();

    public unSubcribe: Subscription[] = [];

    ngOnInit(): void {
      
    }

    ngOnDestroy(): void {
        this._onDestroySub.next();
        this._onDestroySub.complete();
        this._onDestroySub.unsubscribe();
    }

    showToaster(text: string) {
        this.toastr.success(text)
    }

}