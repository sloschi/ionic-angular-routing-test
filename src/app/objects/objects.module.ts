import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ObjectsPage } from "./objects.page";
import { ObjectOverviewComponent } from "./object-overview/object-overview.component";
import { ObjectDetailPage } from "./object-detail/object-detail.page";
import { ObjectListComponent } from "./object-list/object-list.component";

const routes: Routes = [
  {
    path: "",
    component: ObjectsPage,
    children: [
      {
        path: "",
        component: ObjectOverviewComponent
      },
      {
        path: ":objectid",
        component: ObjectDetailPage
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
    ObjectsPage,
    ObjectOverviewComponent,
    ObjectListComponent,
    ObjectDetailPage
  ]
})
export class ObjectsPageModule {}
