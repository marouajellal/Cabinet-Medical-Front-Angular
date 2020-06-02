import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: Http) { }
  getUserData(userId) {
    return this.http.get('http://localhost:8080/user/' + userId , { withCredentials: true });
  }

  userByRdvId(idRdv) {
    return this.http.get('http://localhost:8080/userByRdvId/' + idRdv);
  }

  getpatients() {
    return this.http.get('http://localhost:8080/getpatients', { withCredentials: true });
  }

  addUser(firstName, lastName, age, job, mail, password, phoneNumber, address) {
    const postData = {
        status: 'patient',
        first_name: firstName,
        last_name: lastName,
        age: age,
        job: job,
        mail: mail,
        password: password,
        phone_number: phoneNumber,
        address: address,
        image_path: 'kldjqldjlqjlcq'
    };

    return this.http.post('http://localhost:8080/adduser/', postData, { withCredentials: true});
  }
}
