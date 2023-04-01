import { Component, Input } from '@angular/core';
import { Car } from '../../models/Car';

@Component({
  selector: 'stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.less'],
})
export class StockTableComponent {
  @Input() stockData: Car[];

  displayedColumns: string[] = [
    'position',
    'id',
    'name',
    'horsePower',
    'price',
    'color',
  ];
  constructor() {}
}
