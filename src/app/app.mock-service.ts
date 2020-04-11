import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

export interface Medicines {
  name: string;
  id: number;
  count?: number;
}

const medicines: Medicines[] = [{
  id: 1,
  name: 'Med 1',
  count: 0,
},
{
  id: 2,
  name: 'Med 2',
  count: 0,
},
{
  id: 3,
  name: 'Med 3',
  count: 0
}];


@Injectable()
export class MockService {

  savedMedicinesSub = new Subject<Medicines[]>();
  savedMed: Medicines[] = [];

  getMedicines() {
    return of(medicines);
  }

  saveMed(med: Medicines) {
    const hasMedicines = this.savedMed.filter(item => item.name === med.name);
    if (hasMedicines && hasMedicines.length) {
      hasMedicines[0].count = med.count;
    } else {
      this.savedMed.push(med);
    }
    this.savedMedicinesSub.next([...this.savedMed]);
  }

}




