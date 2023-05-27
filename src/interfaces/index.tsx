export interface IProducts {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutritions;
}

interface Nutritions {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

export interface IOptions {
  label: string;
  value: string;
}

export interface ProductCart {
  label: string;
  value: string;
  count: number;
}
