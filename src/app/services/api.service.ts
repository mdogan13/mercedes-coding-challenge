import { Injectable } from '@angular/core';
import STOCK_MOCK_DATA from './mock-data.json';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor() {}

  public getStockData() {
    let data = STOCK_MOCK_DATA;
    return new Promise((resolve) => setTimeout(() => resolve(data), 500));
  }
}
