import { Component, Input } from '@angular/core';
import { Car } from '../../../../models/Car';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

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
    'inStock',
    'horsePower',
    'price',
    'color',
    'edit',
  ];
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getStockData().then((response: any) => {
      this.stockData = response.results;
    });
  }
  onEdit(event: MouseEvent, element: any) {
    console.log(event, element);

    this.router.navigate(['/edit-page'], {
      state: { data: JSON.stringify(element) },
    });
  }
}
