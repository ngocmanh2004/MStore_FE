  export interface RelatedProductDto {
    productId: number;
    name: string;
    slug: string;
    price: number;
    oldPrice?: number | null;
    primaryImageUrl?: string | null;
    averageRating: number;
    reviewCount: number;
  }

  export interface ReviewDto {
    userName: string;
    rating: number;
    content: string | null;
    createdAt: string;
  }

  export interface SpecificationDto {
    specName: string;
    specValue: string;
  }

  export interface ImageDto {
    imageUrl: string;
    isPrimary: boolean;
    sortOrder: number;
  }

  export interface SelectedOptionDto {
    name: string;
    value: string;
  }

  export interface ProductVariantDto {
    variantId: number;
    sku: string;
    price: number;
    oldPrice: number | null;
    stockQuantity: number;
    selectedOptions: SelectedOptionDto[];
    images: ImageDto[];
  }

  export interface AvailableOptionDto {
    name: string;
    values: string[];
  }

  export interface ProductDetailDto {
    productId: number;
    productName: string;
    slug: string;
    description: string | null;
    brandName: string;
    categoryName: string;
    averageRating: number;
    reviewCount: number;
    availableOptions: AvailableOptionDto[];
    variants: ProductVariantDto[];
    specifications: SpecificationDto[];
    reviews: ReviewDto[];
    relatedProducts: RelatedProductDto[];
  }