import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: Http) { }
  getRdvConsultations(rdvId) {
    return this.http.get('http://localhost:8080/consultations/' + rdvId);
  }
}

