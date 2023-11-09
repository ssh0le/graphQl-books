export interface Book {
  id: string;
  title: string;
  pageAmount: number;
  author: {
    name: string;
  };
}
