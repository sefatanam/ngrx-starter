import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(public httpClient: HttpClient, public endPoint: string) {
  }

  getAll(): Observable<Array<T>> {
    return this.httpClient.get<Array<T>>(this.endPoint).pipe(
      delay(5000)
    );
  }

  add(T): Observable<object> {
    return this.httpClient.post(this.endPoint, T).pipe(
      delay(2000)
    );
  }

  delete(id: number | string) {
    return this.httpClient.delete(`${this.endPoint}/${id}`).pipe(
      delay(2000)
    );
  }

}
