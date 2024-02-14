/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCategoriesCreateCategoryPost } from '../fn/category/api-categories-create-category-post';
import { ApiCategoriesCreateCategoryPost$Params } from '../fn/category/api-categories-create-category-post';
import { apiCategoriesDeleteCategoryIdDelete } from '../fn/category/api-categories-delete-category-id-delete';
import { ApiCategoriesDeleteCategoryIdDelete$Params } from '../fn/category/api-categories-delete-category-id-delete';
import { apiCategoriesGetCategoriesGet$Json } from '../fn/category/api-categories-get-categories-get-json';
import { ApiCategoriesGetCategoriesGet$Json$Params } from '../fn/category/api-categories-get-categories-get-json';
import { apiCategoriesGetCategoriesGet$Plain } from '../fn/category/api-categories-get-categories-get-plain';
import { ApiCategoriesGetCategoriesGet$Plain$Params } from '../fn/category/api-categories-get-categories-get-plain';
import { CategoryDto } from '../models/category-dto';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  private _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }

  /** Path part for operation `apiCategoriesGetCategoriesGet()` */
  static readonly ApiCategoriesGetCategoriesGetPath = '/api/categories/getCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesGetCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesGetCategoriesGet$Plain$Response(params?: ApiCategoriesGetCategoriesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryDto>>> {
    return apiCategoriesGetCategoriesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoriesGetCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesGetCategoriesGet$Plain(params?: ApiCategoriesGetCategoriesGet$Plain$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.apiCategoriesGetCategoriesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesGetCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesGetCategoriesGet$Json$Response(params?: ApiCategoriesGetCategoriesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryDto>>> {
    return apiCategoriesGetCategoriesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoriesGetCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesGetCategoriesGet$Json(params?: ApiCategoriesGetCategoriesGet$Json$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.apiCategoriesGetCategoriesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /** Path part for operation `apiCategoriesCreateCategoryPost()` */
  static readonly ApiCategoriesCreateCategoryPostPath = '/api/categories/createCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesCreateCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesCreateCategoryPost$Response(params?: ApiCategoriesCreateCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoriesCreateCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoriesCreateCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesCreateCategoryPost(params?: ApiCategoriesCreateCategoryPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoriesCreateCategoryPost$Response(params, context).pipe(
         tap(() => {
        this._refresh$.next();
      }),
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCategoriesDeleteCategoryIdDelete()` */
  static readonly ApiCategoriesDeleteCategoryIdDeletePath = '/api/categories/deleteCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesDeleteCategoryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesDeleteCategoryIdDelete$Response(params: ApiCategoriesDeleteCategoryIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoriesDeleteCategoryIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoriesDeleteCategoryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesDeleteCategoryIdDelete(params: ApiCategoriesDeleteCategoryIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoriesDeleteCategoryIdDelete$Response(params, context).pipe(
       tap(() => {
        this._refresh$.next();
      }),
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
