export interface BrandDto {
  brandId: number;
  name: string;
  logoUrl: string | null;
}

export interface CategoryDto {
  categoryId: number;
  name: string;
  slug: string;
  children: CategoryDto[];
}