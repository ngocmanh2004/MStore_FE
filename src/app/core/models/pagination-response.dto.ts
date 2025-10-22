export interface PaginationResponseDto<T> {
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}