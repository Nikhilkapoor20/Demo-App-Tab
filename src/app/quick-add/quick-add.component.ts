import { Medicines } from './../app.mock-service';
import { Component, OnInit } from '@angular/core';
import { MockService } from '../app.mock-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.scss']
})
export class QuickAddComponent implements OnInit {
  quickMedicines$: Observable<Medicines[]>;
  constructor(private service: MockService) { }

  ngOnInit(): void {
    this.quickMedicines$ = this.service.getMedicines();
  }

  updateCartTable(med: Medicines) {
    this.service.saveMed(med);
  }
}
