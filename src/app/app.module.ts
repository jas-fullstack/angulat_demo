import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
//for routing 
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicsComponent } from './basics/basics.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './services/users.service';
import { UsersservicescomComponent } from './usersservicescom/usersservicescom.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },  
  {path:'basics',component:BasicsComponent}, 
  {path:'contact-us',component:ContactusComponent},
  {path:'ReactiveForms',component:ReactiveFormsComponent},
  {path:'ProfileEditor',component:ProfileEditorComponent},
  {path:'register',component:RegisterComponent},
  {path:'listservice',component:UsersservicescomComponent}  
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    UsersComponent,
    BasicsComponent,
    ContactusComponent,
    ReactiveFormsComponent,
    ProfileEditorComponent,
    FileuploadComponent,
    LoginComponent,
    AnimationComponent,
    RegisterComponent,
    UsersservicescomComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
