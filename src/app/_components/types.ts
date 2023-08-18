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

export type Filters = {
  type?: PropertyType;
  // TODO can be nicer
  sort?: "1" | "2" | "3" | "4";
};
