/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CredencialesUsuario } from '../../models/credenciales-usuario';
import { RespuestaAutenticacion } from '../../models/respuesta-autenticacion';

export interface RegistrarUsuario$Plain$Params {
  'x-version': any;
      body?: CredencialesUsuario
}

export function registrarUsuario$Plain(http: HttpClient, rootUrl: string, params: RegistrarUsuario$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RespuestaAutenticacion>> {
  const rb = new RequestBuilder(rootUrl, registrarUsuario$Plain.PATH, 'post');
  if (params) {
    rb.header('x-version', params['x-version'], {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RespuestaAutenticacion>;
    })
  );
}

registrarUsuario$Plain.PATH = '/api/v1/cuentas/registrar';
