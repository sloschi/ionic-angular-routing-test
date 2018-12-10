import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-object-detail",
  templateUrl: "./object-detail.page.html",
  styleUrls: ["./object-detail.page.scss"]
})
export class ObjectDetailPage implements OnInit, OnDestroy {
  public objectId: string;

  private _unsubscribe: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this._unsubscribe)).subscribe(params => {
      this.objectId = params.get("objectid");
    });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
