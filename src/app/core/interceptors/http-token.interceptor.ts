import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { retry, catchError } from 'rxjs/operators';

import { AuthService, JwtService } from '../services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(
        private jwtService: JwtService,
        private authService: AuthService
    ) { }

    objAttachmentUseCase: string[] = ['uploadPodcast'];

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headersConfig: any = {};
        const token = this.jwtService.getToken();

        if (!req.url.includes('uploadProfilePicture')) {
            headersConfig = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
        } else if (req.url.includes('download')) {
            headersConfig = {
                responseType: 'blob'
            };
        }

        if (token) {
            req = req.clone({
                setHeaders: { Authorization: `${token}` }
            });
        }

        const request = req.clone({ setHeaders: headersConfig, withCredentials: true });
        return next.handle(request).pipe(
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.authService.logout();
                    }
                }
                return throwError(err);
            })
        );
    }
}
