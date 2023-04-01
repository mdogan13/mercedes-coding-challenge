import { Component, Input } from '@angular/core';
import { Car } from '../../models/Car';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.less'],
})
export class StockTableComponent {
  public stockData: Car[];
  public displayedColumns: string[] = [
    'position',
    'id',
    'name',
    'inStock',
    'horsePower',
    'price',
    'color',
    'edit',
  ];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getStockData().then((response: any) => {
      this.stockData = response.results;
    });
  }
  onEdit(event: MouseEvent, element: any) {
    console.log(event, element);
  }
}
