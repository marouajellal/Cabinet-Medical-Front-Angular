import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-mypatients',
  templateUrl: './mypatients.component.html',
  styleUrls: ['./mypatients.component.css']
})
export class MypatientsComponent implements OnInit {

  data: Observable<any>;
  result: any [];
  // displayedColumns: string[] = ['first_name', 'last_name', 'Travail', 'Email', 'N° Tél', 'Adresse'];
  displayedColumns: string[] = ['first_name', 'last_name', 'link', 'rdvs', 'consultations'];
  // displayedColumns: string[] = ['first_name', 'last_name', 'job', 'mail', 'phone_number', 'address', 'link'];
  dataSource;
  // dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userservice: UserServiceService) { }

  ngOnInit() {
    this.getallPatients();
  }

  getallPatients() {
    this.userservice.getpatients().subscribe(
      (data) => {
        console.log(data.json());
        this.result = data.json();
        this.dataSource = new MatTableDataSource(data.json());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
