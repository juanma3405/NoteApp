/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NoteDto } from '../../models/note-dto';

export interface ApiNotesGetNotesGet$Plain$Params {
}

export function apiNotesGetNotesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiNotesGetNotesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
  const rb = new RequestBuilder(rootUrl, apiNotesGetNotesGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<NoteDto>>;
    })
  );
}

apiNotesGetNotesGet$Plain.PATH = '/api/notes/getNotes';
