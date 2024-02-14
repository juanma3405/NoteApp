/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NoteDtoConCategories } from '../../models/note-dto-con-categories';

export interface ApiNotesGetNotesWithCategoriesGet$Plain$Params {
}

export function apiNotesGetNotesWithCategoriesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiNotesGetNotesWithCategoriesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDtoConCategories>>> {
  const rb = new RequestBuilder(rootUrl, apiNotesGetNotesWithCategoriesGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<NoteDtoConCategories>>;
    })
  );
}

apiNotesGetNotesWithCategoriesGet$Plain.PATH = '/api/notes/getNotesWithCategories';
