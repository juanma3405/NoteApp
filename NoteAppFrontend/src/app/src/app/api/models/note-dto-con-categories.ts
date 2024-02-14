/* tslint:disable */
/* eslint-disable */
import { CategoryDto } from '../models/category-dto';
export interface NoteDtoConCategories {
  active?: boolean;
  categories?: Array<CategoryDto> | null;
  id?: number;
  text?: string | null;
  title?: string | null;
}
