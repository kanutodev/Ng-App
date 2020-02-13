import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideContentComponent } from './side-content/side-content.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, PageHeaderComponent, MainContentComponent, SideContentComponent, ContentWrapperComponent, HomeComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
