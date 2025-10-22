export interface CategoryDto {
  categoryId: number;
  name: string;
  slug: string;
  children: CategoryDto[]; 
}