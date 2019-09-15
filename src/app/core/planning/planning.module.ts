import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {PlanningRoutingModule} from "./planning-routing.module";
import { PlanningComponent } from './planning.component';
import { PlanningHeaderComponent } from './planning-header/planning-header.component';
import { PlanningDetailComponent } from './planning-detail/planning-detail.component';
import { ActiviteModalComponent } from './activite/activite-modal.component';


@NgModule({
  declarations: [

  PlanningComponent,

  PlanningHeaderComponent,

  PlanningDetailComponent,

  ActiviteModalComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: []
})
export class PlanningModule { }
