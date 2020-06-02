import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserServiceService } from './services/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpModule} from '@angular/http';
import { RdvComponent } from './rdv/rdv/rdv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { CalendarComponent } from './calendar/calendar.component';
import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { TestComponent } from './test/test.component';
import { AddRdvComponent } from './add-rdv/add-rdv.component';
import { ProfileComponent } from './profile/profile.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MyrdvsComponent } from './myrdvs/myrdvs.component';
import { Myrdvs1Component } from './myrdvs1/myrdvs1.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { PatientComponent } from './patient/patient.component';
import { RdvHistoryComponent } from './rdv-history/rdv-history.component';
import { MedecinComponent } from './medecin/medecin.component';
import { RegisterComponent } from './register/register.component';
import { MypatientsComponent } from './mypatients/mypatients.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { MyrdvsMedecinComponent } from './myrdvs-medecin/myrdvs-medecin.component';
import { PatonsultationsComponent } from './patonsultations/patonsultations.component';
import { AddRdvToPatientComponent } from './add-rdv-to-patient/add-rdv-to-patient.component';
import { AddConComponent } from './add-con/add-con.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RdvComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    CalendarComponent,
    TestComponent,
    AddRdvComponent,
    ProfileComponent,
    MyrdvsComponent, Myrdvs1Component, ConsultationsComponent, PatientComponent, RdvHistoryComponent, MedecinComponent, RegisterComponent, MypatientsComponent, PatientProfileComponent, MyrdvsMedecinComponent, PatonsultationsComponent, AddRdvToPatientComponent, AddConComponent
  ],
  entryComponents: [
    LoginComponent,
    TestComponent,
    AddRdvComponent,
    CalendarComponent,
    PatientProfileComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'user/:userId', component: UserComponent, canActivate: [AuthGuardService] },
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'calendar', component: CalendarComponent },
      {path: 'addRdv', component: AddRdvComponent },
      {path: 'myrdvs', component: Myrdvs1Component },
      {path: 'mypatients', component: MedecinComponent},
      {path: 'consultations/:rdvId', component: Myrdvs1Component },
      {path: 'patient', component: Myrdvs1Component },
      {path: 'myRdvHistory', component: Myrdvs1Component },
      {path: 'refresh', component: PatientComponent },
      {path: 'medecin', component: MedecinComponent },
      {path: 'profile-profile/:id', component: MedecinComponent },
      {path: 'patient-rdvs/:id', component: MedecinComponent },
      {path: 'patient-consultations/:id', component: MedecinComponent },
      {path: 'add-rdv-to-patient/:id', component: MedecinComponent },
    ]),
    ScheduleModule, RecurrenceEditorModule,
    CdkTableModule,
    MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  ],
  providers: [
    UserServiceService,
    AuthService,
    AuthGuardService,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
