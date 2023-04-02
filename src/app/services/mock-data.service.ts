import { Injectable } from '@angular/core';
import STOCK_MOCK_DATA from './mock-data.json';
import { Car } from '../models/Car';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private jsonData: any = STOCK_MOCK_DATA;

  constructor() {}

  public getData() {
    return this.jsonData;
  }

  public setData(params: { carId: string; newStockData: Car }) {
    const index = this.jsonData.results.findIndex(
      (car: Car) => car.id === params.carId
    );

    if (index !== -1) {
      this.jsonData.results.splice(index, 1, params.newStockData);

      return true;
    }

    return false;
  }
}
