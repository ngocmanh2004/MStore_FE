export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  discountTag?: string;
  rating: number;
  reviewCount: number;
  savingAmount?: number;  
  isGenuine?: boolean; 
  hasFastDelivery?: boolean; 
}