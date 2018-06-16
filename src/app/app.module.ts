import { IndexBlogComponent } from './Blog-Section/index-blog/index-blog.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PageComponent } from './reusable/page/page.component';
import { HomeComponent } from './homepage/home/home.component';
import { CategoriesComponent } from './forum-portal/categories/categories.component';
import { MainNavbarComponent } from './global/main-navbar/main-navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './about-page/about/about.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StorageService } from './services/storage.service';
import { ZippyComponent } from './reusable/zippy/zippy.component';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForumListComponent } from './forum-portal/forum-list/forum-list.component';
import { ForumPageComponent } from './forum_page/forum-page/forum-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent,

  },
  {
    path: "forums/:id",
    component: ForumPageComponent
  },
  {
    path: "forums",
    component: CategoriesComponent
  },
  {
    path: "blogs",
    component: IndexBlogComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    CategoriesComponent,
    MainNavbarComponent,
    LoginComponent,
    AboutComponent,
    SignupComponent,
    IndexBlogComponent,
    ZippyComponent,
    ForumListComponent,
    ForumPageComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),

  ],
  providers: [
    AuthService, AuthGuard, StorageService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
