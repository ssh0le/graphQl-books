export interface CommonBookProperties {
  title: string;
  pageAmount: number;
}

export interface NewBookWithExsitingAuthor extends CommonBookProperties {
  author: string;
}
