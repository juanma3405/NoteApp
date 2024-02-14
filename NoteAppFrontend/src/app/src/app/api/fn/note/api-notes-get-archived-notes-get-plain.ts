/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NoteDto } from '../../models/note-dto';

export interface ApiNotesGetArchivedNotesGet$Plain$Params {
}

export function apiNotesGetArchivedNotesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiNotesGetArchivedNotesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
  const rb = new RequestBuilder(rootUrl, apiNotesGetArchivedNotesGet$Plain.PATH, 'get');
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

apiNotesGetArchivedNotesGet$Plain.PATH = '/api/notes/getArchivedNotes';
