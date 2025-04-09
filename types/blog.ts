export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export interface Blog {
  _id: number;
  mainImage: string;
  title: string;
  metadata: string;
}
