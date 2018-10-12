import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { MyApp } from './app.component';
import { ContactsPage } from '../pages/contacts/contacts';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

// Modules
import { TabsModule } from '../pages/tabs/tabs.module';
import { ContactCreatePageModule } from '../pages/contact-create/contact-create.module';
import { ContactDetailPageModule } from '../pages/contact-detail/contact-detail.module';

//Services
import { ContactsServiceProvider } from '../services/contacts-service';
import { AuthServiceProvider } from '../services/auth-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ContactsPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabsModule,
    HttpClientModule,
    ContactDetailPageModule,
    ContactCreatePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ContactsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
