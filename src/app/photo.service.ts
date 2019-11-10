import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  getPhotoAsBase64() {
    return this.httpClient.get('/api/v1/photo', {responseType: 'text'});
  }
}
