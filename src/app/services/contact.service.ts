import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

const ENDPOINT_HOME =
  'https://0e26f4f012c5e35eb0d8c6b5a4dba0.e2.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/786c901f96b44f3bb0ca1698ab48c66b/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-OnqsH8q4U3ENwE94W0NjjqcdBdnMAS2VtcP0P_arXU';

const ENDPOINT_POWERPLATFORM = ENDPOINT_HOME;

export interface ConsultaHome {
  origen: string;
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

export interface ConsultaPowerPlatform {
  origen: string;
  nombre: string;
  telefono: string;
  correo: string;
  necesidad: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  enviarConsultaHome(data: ConsultaHome) {
    return this.http
      .post(ENDPOINT_HOME, data, { responseType: 'text' })
      .pipe(
        map(() => void 0),
        catchError((err: HttpErrorResponse) => throwError(() => err)),
      );
  }

  enviarConsultaPowerPlatform(data: ConsultaPowerPlatform) {
    return this.http
      .post(ENDPOINT_POWERPLATFORM, data, { responseType: 'text' })
      .pipe(
        map(() => void 0),
        catchError((err: HttpErrorResponse) => throwError(() => err)),
      );
  }
}
