import { typeVariant } from '~/utils/client/types/variant';
// api 로 받아온 json 데이터 타입
export interface JsonProduct {
  id: number;
  channel_id: string;
  store_id: string;
  shopify_id: string;
  body_html: string;
  title: string;
  vendor: string;
  product_type: string;
  handle: string;
  updated_at: string;
  published_at: string;
  status: string;
  tags: string[];
  collection_handles: string[];
  collection_ids: number[];
  variants: typeVariant[];
  favorite_count: number;
  extra: any;
  filter_colors: string[];
  ppb_brand_id: number;
  labels: [];
  order_count: number;
  product_group: string;
  review_point: string;
  review_count: number;
  thumbnail_image_id: null;
  lens_type: string;
  dia_inner: number;
  dia_outer: number;
  water: number;
  base_curve: number;
  material: string;
  review_number: string;
  lens_description: string;
  lens_count: number;
  color: Color;
  pack_count: number;
  set_product_ids: [];
  web_only: boolean;
  bogo_type: null;
  bogo_collection_id: null;
  thumbnail_video: null;
  detail_video: null;
  locale: any;
  options: any;
  cyl: null;
  description_json: any;
  images: Image[];
  image: Image;
  detail_image: any;
  detail_images: DetailImage[];
  url: string;
  lens_pattern_image: string;
}

export interface Image {
  id: number;
  ppb_product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string;
  src: string;
  size256: string;
  overlays: [];
}

interface DetailImage {
  id: number;
  ppb_product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string;
  src: string;
  size256: string;
  overlays: [];
}

export type Color =
  | 'black'
  | 'clear'
  | 'brown'
  | 'green'
  | 'blue'
  | 'gray'
  | 'purple'
  | 'pink'
  | 'twotone'
  | 'solid';
