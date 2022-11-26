import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CreatePersoneComponent } from './create-persone/create-persone.component';
import { DetailsPersonComponent } from './details-person/details-person.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Not404Component } from './not404/not404.component';
import { PersoneListComponent } from './persone-list/persone-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePersoneComponent } from './update-persone/update-persone.component';

const routes: Routes = [
  { path: 'persones', component: PersoneListComponent },
  { path: 'create-persone', component: CreatePersoneComponent },
  { path: '', redirectTo: "persones", pathMatch: 'full' },
  { path: 'updatePersone/:id', component: UpdatePersoneComponent },
  { path: 'detailsPerone/:id', component: DetailsPersonComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '404', component: Not404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
