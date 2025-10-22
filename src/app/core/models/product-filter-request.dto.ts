export interface ProductFilterRequestDto {
  categorySlug?: string | null;
  brandName?: string | null;
  searchTerm?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  sortBy?: string | null;
  sortOrder?: string | null;
  pageNumber?: number;
  pageSize?: number;
}