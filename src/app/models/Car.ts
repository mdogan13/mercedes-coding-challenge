import { ColorOptions } from "./ColorOptions";

export interface Car {
    id: string;
    inStock: boolean;
    horsePower: number;
    price: number;
    color: ColorOptions;
  }