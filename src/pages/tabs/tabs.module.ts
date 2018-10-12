import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage
  ],
  imports:[
    IonicModule.forRoot(TabsPage)
  ]
})
export class TabsModule {}
