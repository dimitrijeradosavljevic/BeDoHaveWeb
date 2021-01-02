import { ExpressResponse } from './../_shared/models/express-response';
import { BaseApiService } from './../_shared/services/base-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../_shared/models/theme';
import { tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends BaseApiService {

  public postTheme(theme: Theme): Observable<ExpressResponse<Theme>> {
    return this.http.post<ExpressResponse<Theme>>(`${this.apiUrl}/themes`, theme);
  }
  
  public getThemes():Observable<ExpressResponse<Theme[]>> {
    return this.http.get<ExpressResponse<Theme[]>>(`${this.apiUrl}/themes`);
  }

  public getThemesPaginate(perPage?: number | string, page?: number | string): Observable<ExpressResponse> {
    let params = new HttpParams();

    params = (page ? params.set('page', page.toString()) : params);

    params = (perPage ? params.set('perPage', perPage.toString()) : params);

    return this.http.get<ExpressResponse>(`${this.apiUrl}/themes`, { params });
  }

  public getTheme(themeId: string | null) :Observable<ExpressResponse<Theme>> {
    return this.http.get<ExpressResponse<Theme>>(`${this.apiUrl}/themes/${themeId}`);
  }

  public deleteTheme(themeId: string | null) :Observable<ExpressResponse<null>> {
    return this.http.delete<ExpressResponse<null>>(`${this.apiUrl}/themes/${themeId}`);
  }
}
