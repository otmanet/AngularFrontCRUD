import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoneListComponent } from './persone-list/persone-list.component';
import { CreatePersoneComponent } from './create-persone/create-persone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePersoneComponent } from './update-persone/update-persone.component';
import { DetailsPersonComponent } from './details-person/details-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { searchFilterPip } from './search-filter.pipe';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ClarityModule } from '@clr/angular';
import { Not404Component } from './not404/not404.component';


@NgModule({
  declarations: [
    AppComponent,
    PersoneListComponent,
    CreatePersoneComponent,
    UpdatePersoneComponent,
    DetailsPersonComponent,
    searchFilterPip,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    Not404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    NgxPaginationModule,
    MatSelectModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
