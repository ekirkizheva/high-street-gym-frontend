import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, take } from 'rxjs';

@Component({
  selector: 'app-xml-upload',
  templateUrl: './xml-upload.component.html',
  styleUrls: ['./xml-upload.component.scss']
})
export class XmlUploadComponent {

  private trainerFormData = new FormData();
  private scheduledClassFromData = new FormData();

  trainerErrors: any;
  scheduledClassErrors: any;

  trainerUploaded = false;
  scheduledClassUploaded = false;

  constructor(private http: HttpClient) {
  }

  onFileSelected(event: any, type: 'trainer' | 'class') {
    const formData = type === 'trainer' ? this.trainerFormData : this.scheduledClassFromData;
    type === 'trainer' ? this.trainerUploaded = false : this.scheduledClassUploaded = false;

    const file:File = event.target.files[0];
    if (file) {
      formData.delete('file');
      formData.append('file', file);
    }
  }

  uploadFile(type: 'trainer' | 'class') {
    const formData = type === 'trainer' ? this.trainerFormData : this.scheduledClassFromData;
    this.http.post(`/api/admin/${type}`, formData).pipe(
      take(1),
      catchError((error) => {
        type === 'trainer' ? this.trainerErrors = error : this.scheduledClassErrors = error;
        return error;
      })
    ).subscribe(() => { type === 'trainer' ? this.trainerUploaded = true : this.scheduledClassUploaded = true; });
  }
}
