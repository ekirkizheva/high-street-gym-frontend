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

  onTrainerFileSelected(event: any) {
    this.trainerUploaded = false;
    const file:File = event.target.files[0];
    if (file) {
        this.trainerFormData.delete('file');
        this.trainerFormData.append('file', file);
    }
  }

  onscheduledClassFileSelected(event: any) {
    this.scheduledClassUploaded = false;
    const file:File = event.target.files[0];
    if (file) {
        this.scheduledClassFromData.delete('file');
        this.scheduledClassFromData.append('file', file);
    }
  }

  uploadTrainer(){
    this.http.post('/api/admin/trainer', this.trainerFormData).pipe(
      take(1),
      catchError((error) => {
        this.trainerErrors = error;
        return error;
      })
    ).subscribe(() => { this.trainerUploaded = true });
  }

  uploadClass(){
    this.http.post('/api/admin/class', this.scheduledClassFromData).pipe(
      take(1),
      catchError((error) => {
        this.scheduledClassErrors = error;
        return error;
      })
    ).subscribe(() => { this.scheduledClassUploaded = true });
  }
}
