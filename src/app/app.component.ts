import {Component, OnInit} from '@angular/core';
import {PhotoService} from './photo.service';
import {Observable} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgData: Observable<SafeUrl>;
  title = 'node-image-to-base64';

  constructor(private photoService: PhotoService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.imgData = this.photoService.getPhotoAsBase64()
      .pipe(
        map(imgAsBase64 => this.domSanitizer.bypassSecurityTrustUrl(`data:image/jpg;base64,${imgAsBase64}`))
      );
  }
}
