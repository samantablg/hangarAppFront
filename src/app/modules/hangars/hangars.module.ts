import { HangarDetailComponent } from './views/hangar-detail/hangar-detail.component';
import { HangarListComponent } from './components/hangar-list/hangar-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { HangarsRoutingModule } from './hangars-routing.module';
import { HangarsComponent } from './views/hangars/hangars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonComponent } from './components/plus-button/button.component';
import { FormHangarComponent } from './components/form-hangar/form-hangar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHangarModifyComponent } from './views/hangar-modify/form-hangar-modify.component';
import { HangarNewComponent } from './views/hangar-new/hangar-new.component';
import { HangarsResultComponent } from './views/hangars-result/hangars-result.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    HangarsComponent,
    HangarDetailComponent,
    SidebarComponent,
    ButtonComponent,
    FormHangarComponent,
    FormHangarModifyComponent,
    HangarNewComponent,
    HangarsResultComponent,
    HangarListComponent,
    HangarDetailComponent
  ],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TranslateModule
  ],
  exports: [HangarsComponent]
})

export class HangarsModule {
}
