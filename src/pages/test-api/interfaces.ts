export interface Props {
  test1: number;
  products: ICardProduct[];
}

export interface ICardProduct {
  category?: string;
  id: string;
  cover: IPhoto;
  images: IPhoto[];
  name: string;
  description?: string;
  link?: string;
  priceFrom?: number;
  site?: string;
  platforms?: IPlatform[];
  meta?: ISeo;
}

export interface IPhoto {
  id: string;
  name?: string;
  path: string;
  size?: number;
  mimetype?: string;
}

export interface ISeo {
  title: string;
  description: string;
  meta?: {
    name: {
      keywords: string;
    };
  } | null;
}

export interface IPlatform {
  nick: string;
  price: string;
  link: string;
  comment: string;
  name: string;
  icon: string;
}
