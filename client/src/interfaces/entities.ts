export interface Book {
  id: string;
  title: string;
  pageAmount: number;
  author: {
    name: string;
  };
}

export interface Author {
  id: string;
  name: string;
}
