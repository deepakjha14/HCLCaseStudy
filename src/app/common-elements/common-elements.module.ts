import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { SidenavcontentComponent } from './sidenavcontent/sidenavcontent.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { TopstockpriceComponent } from './topstockprice/topstockprice.component';
import { OfflineComponent } from './offline/offline.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SidenavcontentComponent,
    MainpanelComponent,
    TopstockpriceComponent,
    OfflineComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    HeaderComponent,
    MainpanelComponent
  ]
})
export class CommonElementsModule { }
