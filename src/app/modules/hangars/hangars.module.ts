import { SharedModule } from 'src/app/shared/shared.module';
import { HangarDetailComponent } from './views/hangar-detail/hangar-detail.component';
import { HangarListComponent } from './components/hangar-list/hangar-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { HangarsRoutingModule } from './hangars-routing.module';
import { HangarsComponent } from './views/hangars/hangars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlusButtonComponent } from './components/plus-button/plus-button.component';
import { FormHangarComponent } from './components/form-hangar/form-hangar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHangarModifyComponent } from './views/hangar-modify/hangar-modify.component';
import { HangarNewComponent } from './views/hangar-new/hangar-new.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    HangarsComponent,
    HangarDetailComponent,
    SidebarComponent,
    PlusButtonComponent,
    FormHangarComponent,
    FormHangarModifyComponent,
    HangarNewComponent,
    HangarListComponent,
    HangarDetailComponent
  ],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TranslateModule,
    SharedModule
  ],
  exports: [HangarsComponent]
})

export class HangarsModule {
}
