import { Component } from '@angular/core';
import { Car } from './models/Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  STOCK_DATA: Car[] = [
    {
      id: '45363456345634',
      name: 'SDFSDFG',
      inStock: false,
      horsePower: '240HP',
      price: 200000,
      color: 'black',
    },
    {
      id: '45363456345634',
      name: 'ruyrtyurty',
      inStock: true,
      horsePower: '540HP',
      price: 900000,
      color: 'black',
    },
  ];
  constructor() {}
}
