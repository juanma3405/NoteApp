/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiNotesAddCategoryPut } from '../fn/note/api-notes-add-category-put';
import { ApiNotesAddCategoryPut$Params } from '../fn/note/api-notes-add-category-put';
import { apiNotesArchiveNoteIdPut } from '../fn/note/api-notes-archive-note-id-put';
import { ApiNotesArchiveNoteIdPut$Params } from '../fn/note/api-notes-archive-note-id-put';
import { apiNotesCreateNotePost } from '../fn/note/api-notes-create-note-post';
import { ApiNotesCreateNotePost$Params } from '../fn/note/api-notes-create-note-post';
import { apiNotesDeleteNoteIdDelete } from '../fn/note/api-notes-delete-note-id-delete';
import { ApiNotesDeleteNoteIdDelete$Params } from '../fn/note/api-notes-delete-note-id-delete';
import { apiNotesGetActiveNotesGet$Json } from '../fn/note/api-notes-get-active-notes-get-json';
import { ApiNotesGetActiveNotesGet$Json$Params } from '../fn/note/api-notes-get-active-notes-get-json';
import { apiNotesGetActiveNotesGet$Plain } from '../fn/note/api-notes-get-active-notes-get-plain';
import { ApiNotesGetActiveNotesGet$Plain$Params } from '../fn/note/api-notes-get-active-notes-get-plain';
import { apiNotesGetArchivedNotesGet$Json } from '../fn/note/api-notes-get-archived-notes-get-json';
import { ApiNotesGetArchivedNotesGet$Json$Params } from '../fn/note/api-notes-get-archived-notes-get-json';
import { apiNotesGetArchivedNotesGet$Plain } from '../fn/note/api-notes-get-archived-notes-get-plain';
import { ApiNotesGetArchivedNotesGet$Plain$Params } from '../fn/note/api-notes-get-archived-notes-get-plain';
import { apiNotesGetNotesByCategoryNameGet$Json } from '../fn/note/api-notes-get-notes-by-category-name-get-json';
import { ApiNotesGetNotesByCategoryNameGet$Json$Params } from '../fn/note/api-notes-get-notes-by-category-name-get-json';
import { apiNotesGetNotesByCategoryNameGet$Plain } from '../fn/note/api-notes-get-notes-by-category-name-get-plain';
import { ApiNotesGetNotesByCategoryNameGet$Plain$Params } from '../fn/note/api-notes-get-notes-by-category-name-get-plain';
import { apiNotesGetNotesGet$Json } from '../fn/note/api-notes-get-notes-get-json';
import { ApiNotesGetNotesGet$Json$Params } from '../fn/note/api-notes-get-notes-get-json';
import { apiNotesGetNotesGet$Plain } from '../fn/note/api-notes-get-notes-get-plain';
import { ApiNotesGetNotesGet$Plain$Params } from '../fn/note/api-notes-get-notes-get-plain';
import { apiNotesGetNotesWithCategoriesGet$Json } from '../fn/note/api-notes-get-notes-with-categories-get-json';
import { ApiNotesGetNotesWithCategoriesGet$Json$Params } from '../fn/note/api-notes-get-notes-with-categories-get-json';
import { apiNotesGetNotesWithCategoriesGet$Plain } from '../fn/note/api-notes-get-notes-with-categories-get-plain';
import { ApiNotesGetNotesWithCategoriesGet$Plain$Params } from '../fn/note/api-notes-get-notes-with-categories-get-plain';
import { apiNotesUnarchiveNoteIdPut } from '../fn/note/api-notes-unarchive-note-id-put';
import { ApiNotesUnarchiveNoteIdPut$Params } from '../fn/note/api-notes-unarchive-note-id-put';
import { apiNotesUpdateNoteIdPut } from '../fn/note/api-notes-update-note-id-put';
import { ApiNotesUpdateNoteIdPut$Params } from '../fn/note/api-notes-update-note-id-put';
import { NoteDto } from '../models/note-dto';
import { NoteDtoConCategories } from '../models/note-dto-con-categories';

@Injectable({ providedIn: 'root' })
export class NoteService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  private _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }

  /** Path part for operation `apiNotesGetNotesGet()` */
  static readonly ApiNotesGetNotesGetPath = '/api/notes/getNotes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetNotesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesGet$Plain$Response(params?: ApiNotesGetNotesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetNotesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetNotesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesGet$Plain(params?: ApiNotesGetNotesGet$Plain$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetNotesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetNotesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesGet$Json$Response(params?: ApiNotesGetNotesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetNotesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetNotesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesGet$Json(params?: ApiNotesGetNotesGet$Json$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetNotesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

  /** Path part for operation `apiNotesGetNotesWithCategoriesGet()` */
  static readonly ApiNotesGetNotesWithCategoriesGetPath = '/api/notes/getNotesWithCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetNotesWithCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesWithCategoriesGet$Plain$Response(params?: ApiNotesGetNotesWithCategoriesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDtoConCategories>>> {
    return apiNotesGetNotesWithCategoriesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetNotesWithCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesWithCategoriesGet$Plain(params?: ApiNotesGetNotesWithCategoriesGet$Plain$Params, context?: HttpContext): Observable<Array<NoteDtoConCategories>> {
    return this.apiNotesGetNotesWithCategoriesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDtoConCategories>>): Array<NoteDtoConCategories> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetNotesWithCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesWithCategoriesGet$Json$Response(params?: ApiNotesGetNotesWithCategoriesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDtoConCategories>>> {
    return apiNotesGetNotesWithCategoriesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetNotesWithCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesWithCategoriesGet$Json(params?: ApiNotesGetNotesWithCategoriesGet$Json$Params, context?: HttpContext): Observable<Array<NoteDtoConCategories>> {
    return this.apiNotesGetNotesWithCategoriesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDtoConCategories>>): Array<NoteDtoConCategories> => r.body)
    );
  }

  /** Path part for operation `apiNotesCreateNotePost()` */
  static readonly ApiNotesCreateNotePostPath = '/api/notes/createNote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesCreateNotePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotesCreateNotePost$Response(params?: ApiNotesCreateNotePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiNotesCreateNotePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesCreateNotePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotesCreateNotePost(params?: ApiNotesCreateNotePost$Params, context?: HttpContext): Observable<void> {
    return this.apiNotesCreateNotePost$Response(params, context).pipe(
      tap(() => {
        this._refresh$.next();
      }),
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiNotesUpdateNoteIdPut()` */
  static readonly ApiNotesUpdateNoteIdPutPath = '/api/notes/updateNote/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesUpdateNoteIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotesUpdateNoteIdPut$Response(params: ApiNotesUpdateNoteIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiNotesUpdateNoteIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesUpdateNoteIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotesUpdateNoteIdPut(params: ApiNotesUpdateNoteIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiNotesUpdateNoteIdPut$Response(params, context).pipe(
       tap(() => {
        this._refresh$.next();
      }),
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiNotesDeleteNoteIdDelete()` */
  static readonly ApiNotesDeleteNoteIdDeletePath = '/api/notes/deleteNote/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesDeleteNoteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesDeleteNoteIdDelete$Response(params: ApiNotesDeleteNoteIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiNotesDeleteNoteIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesDeleteNoteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesDeleteNoteIdDelete(params: ApiNotesDeleteNoteIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiNotesDeleteNoteIdDelete$Response(params, context).pipe(
      tap(() => {
        this._refresh$.next();
      }),
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiNotesArchiveNoteIdPut()` */
  static readonly ApiNotesArchiveNoteIdPutPath = '/api/notes/archiveNote/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesArchiveNoteIdPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesArchiveNoteIdPut$Response(params: ApiNotesArchiveNoteIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiNotesArchiveNoteIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesArchiveNoteIdPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesArchiveNoteIdPut(params: ApiNotesArchiveNoteIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiNotesArchiveNoteIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiNotesUnarchiveNoteIdPut()` */
  static readonly ApiNotesUnarchiveNoteIdPutPath = '/api/notes/unarchiveNote/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesUnarchiveNoteIdPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesUnarchiveNoteIdPut$Response(params: ApiNotesUnarchiveNoteIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiNotesUnarchiveNoteIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesUnarchiveNoteIdPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesUnarchiveNoteIdPut(params: ApiNotesUnarchiveNoteIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiNotesUnarchiveNoteIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiNotesGetActiveNotesGet()` */
  static readonly ApiNotesGetActiveNotesGetPath = '/api/notes/getActiveNotes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetActiveNotesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetActiveNotesGet$Plain$Response(params?: ApiNotesGetActiveNotesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetActiveNotesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetActiveNotesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetActiveNotesGet$Plain(params?: ApiNotesGetActiveNotesGet$Plain$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetActiveNotesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetActiveNotesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetActiveNotesGet$Json$Response(params?: ApiNotesGetActiveNotesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetActiveNotesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetActiveNotesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetActiveNotesGet$Json(params?: ApiNotesGetActiveNotesGet$Json$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetActiveNotesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

  /** Path part for operation `apiNotesGetArchivedNotesGet()` */
  static readonly ApiNotesGetArchivedNotesGetPath = '/api/notes/getArchivedNotes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetArchivedNotesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetArchivedNotesGet$Plain$Response(params?: ApiNotesGetArchivedNotesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetArchivedNotesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetArchivedNotesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetArchivedNotesGet$Plain(params?: ApiNotesGetArchivedNotesGet$Plain$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetArchivedNotesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetArchivedNotesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetArchivedNotesGet$Json$Response(params?: ApiNotesGetArchivedNotesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetArchivedNotesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetArchivedNotesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetArchivedNotesGet$Json(params?: ApiNotesGetArchivedNotesGet$Json$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetArchivedNotesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

  /** Path part for operation `apiNotesAddCategoryPut()` */
  static readonly ApiNotesAddCategoryPutPath = '/api/notes/addCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesAddCategoryPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotesAddCategoryPut$Response(params?: ApiNotesAddCategoryPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiNotesAddCategoryPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesAddCategoryPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotesAddCategoryPut(params?: ApiNotesAddCategoryPut$Params, context?: HttpContext): Observable<void> {
    return this.apiNotesAddCategoryPut$Response(params, context).pipe(
       tap(() => {
        this._refresh$.next();
      }),
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiNotesGetNotesByCategoryNameGet()` */
  static readonly ApiNotesGetNotesByCategoryNameGetPath = '/api/notes/getNotesByCategory/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetNotesByCategoryNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesByCategoryNameGet$Plain$Response(params: ApiNotesGetNotesByCategoryNameGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetNotesByCategoryNameGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetNotesByCategoryNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesByCategoryNameGet$Plain(params: ApiNotesGetNotesByCategoryNameGet$Plain$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetNotesByCategoryNameGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotesGetNotesByCategoryNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesByCategoryNameGet$Json$Response(params: ApiNotesGetNotesByCategoryNameGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NoteDto>>> {
    return apiNotesGetNotesByCategoryNameGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotesGetNotesByCategoryNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotesGetNotesByCategoryNameGet$Json(params: ApiNotesGetNotesByCategoryNameGet$Json$Params, context?: HttpContext): Observable<Array<NoteDto>> {
    return this.apiNotesGetNotesByCategoryNameGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NoteDto>>): Array<NoteDto> => r.body)
    );
  }

}
