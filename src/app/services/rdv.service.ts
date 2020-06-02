import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http: Http) { }
  getRdvConsultations(rdvId) {
    return this.http.get('http://localhost:8080/consultations/' + rdvId);
  }
  getUserRdvs(userId) {
    return this.http.get('http://localhost:8080/rdvs/' + userId);
  }
  getUserRdvsAfterDate(userId, date) {
    return this.http.get('http://localhost:8080/myrdvs/' + userId + '/' + date);
  }
  getUserRdvsHistory(userId, date) {
    return this.http.get('http://localhost:8080/myrdvshistory/' + userId + '/' + date);
  }
  getallrdvs() {
    return this.http.get('http://localhost:8080/getallrdvs');
  }
  rdvsofday(date) {
    return this.http.get('http://localhost:8080/rdvsofday/' + date);
  }
  addRdv(date, sHour, eHour, idUser) {
    const postData = {
      'date': date,
      'available': '0',
      'starting_hour': sHour,
      'finishing_hour': eHour,
      };
    return this.http.post('http://localhost:8080/addrdv/' + idUser, postData, { withCredentials: true});
  }
  cancelRdv(idRdv) {
    return this.http.get('http://localhost:8080/cancelrdv/' + idRdv);
  }
  addConsultation(description,userId){
    const postData = {
      'description': description,
      };
    return this.http.post('http://localhost:8080/addconsultation/' + userId, postData, { withCredentials: true});
  }
}
