import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.scss"]
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  public taskId: string | null;

  private _unsubscribe: Subject<any> = new Subject<any>();

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this._unsubscribe)).subscribe(params => {
      this.taskId = params.get("taskid");
    });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
