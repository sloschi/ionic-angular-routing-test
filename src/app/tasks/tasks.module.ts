import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TasksPage } from "./tasks.page";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskOverviewComponent } from "./task-overview/task-overview.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";

const routes: Routes = [
  {
    path: "",
    component: TasksPage,
    children: [
      {
        path: "",
        component: TaskOverviewComponent
      },
      {
        path: ":taskid",
        component: TaskDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TasksPage,
    TaskListComponent,
    TaskOverviewComponent,
    TaskDetailComponent
  ]
})
export class TasksPageModule {}
