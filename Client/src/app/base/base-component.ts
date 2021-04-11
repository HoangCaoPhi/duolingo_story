import { OnDestroy, OnInit } from "@angular/core";
import { Subject, Subscription } from "rxjs";

export class BaseComponent implements OnDestroy, OnInit {
    public _onDestroySub: Subject<void> = new Subject<void>();

    public unSubcribe: Subscription[] = [];

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
    ngOnDestroy(): void {
        this._onDestroySub.next();
        this._onDestroySub.complete();
        this._onDestroySub.unsubscribe();
    }

}