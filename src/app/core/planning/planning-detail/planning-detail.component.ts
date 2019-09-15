import {Component, OnInit, Input} from '@angular/core';
import {Planning} from "../../model/planning";
import {Constants} from "../../shared/Constants";
import {BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-planning-detail',
  templateUrl: './planning-detail.component.html',
  styleUrls: ['./planning-detail.component.css']
})
export class PlanningDetailComponent implements OnInit {

  @Input()
  planning: Planning;

  @Input()
  day;

  isHiddenActivite: boolean = true;

  Days = ['MONDAY', 'TUESDAT', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SUNDAY', 'SATURDAY'];

  constructor() { }

  ngOnInit() {

    console.log('planning.affectationsMap[day] ', this.planning.affectationsMap['MONDAY'])
    this.planning.affectationsMap['MONDAY'].forEach( activite => console.log('ACTIVITE : ', activite));
  }

  showDetail() {
    this.isHiddenActivite = !this.isHiddenActivite;
  }

}
