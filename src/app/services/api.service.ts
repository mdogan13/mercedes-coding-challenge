import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { MockDataService } from './mock-data.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private mockDataService: MockDataService) {}

  public getStockData() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.mockDataService.getData()), 500)
    );
  }

  public setStockData(params: { carId: string; newStockData: Car }) {
    const isOperationSuccess = this.mockDataService.setData({
      carId: params.carId,
      newStockData: params.newStockData,
    });

    if (isOperationSuccess) {
      return Promise.resolve({ status: 200, message: 'success' });
    } else {
      return Promise.reject({ status: 400, message: 'could not set the data' });
    }
  }
}
