import {Component, OnInit, ViewChild, ViewChildren, QueryList, QueryList} from '@angular/core';
import {PlanningService} from "./planning.service";
import {Planning} from "../model/planning";
import {Collaborateur} from "../model/collaborateur";
import {PlanningDetailComponent} from "./planning-detail/planning-detail.component";

@Component({
  selector: 'app-planning',
  templateUrl: 'planning.component.html',
  styleUrls: ['planning.component.css']
})
export class PlanningComponent implements OnInit {

  plannings;
  collaborateurs: Array<Collaborateur> = new Array<Collaborateur>();
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURDSDAY', 'FRIDAY', 'SUNDAY', 'SATURDAY'];

  @ViewChildren('showDetail')
  planningDetail: QueryList<PlanningDetailComponent>;



  constructor(public planningService: PlanningService) {
  }

  ngOnInit() {

    this.planningService.getPlannings()
      .subscribe((plannings: Planning) => {
        console.log('plannings >>>> ', plannings);
        this.plannings = plannings;
        this.plannings.forEach(planning => {
          let collaborateur: Collaborateur = new Collaborateur(planning.idCollaborateur, planning.name);
          this.collaborateurs.push(collaborateur);
        })
      });
  }

  test(planningDet: PlanningDetailComponent) {
    console.log('OKKKKKKKKK ', planningDet.isHiddenActivite);
    //planningDet.isHiddenActivite = !planningDet.isHiddenActivite;
    this.planningDetail.forEach((elem: PlanningDetailComponent) => {
      if (elem === planningDet) {
        elem.showDetail();
      }
    })
    //this.planningDetailChild.isHiddenActivite = false;
  }

}
