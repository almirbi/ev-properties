export type PropertyType = "house" | "apartment";

export type Property = {
  floors: number;
  rooms: number;
  price: string;
  id: string;
  createdAt: string;
  type: PropertyType;
  title: string;
};
export type SortMap = { type: "price" | "title"; val: 1 | -1 };
export type Filters = {
  filter?: PropertyType;
  sort?: SortMap;
  search?: string;
};
