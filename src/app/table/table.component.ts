import { Component, OnInit } from '@angular/core';

import { MockService } from '../app.mock-service';
import { Medicines } from './../app.mock-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private service: MockService) { }
  cartData: Medicines[];

  ngOnInit(): void {
    this.service.savedMedicinesSub.subscribe((response => {
      this.cartData = response;
    }));
  }
}
