export interface ProductCardDto {
  productId: number;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number | null; 
  primaryImageUrl?: string | null; 
  averageRating: number;
  reviewCount: number;
}