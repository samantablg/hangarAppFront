import { TranslateModule } from '@ngx-translate/core';
import { HangarsRoutingModule } from './hangars-routing.module';
import { HangarsComponent } from './views/hangars/hangars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarDetailComponent } from './views/hangar-detail/hangar-detail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarToggleComponent } from './components/sidebar-toggle/sidebar-toggle.component';
import { ButtonComponent } from './components/plus-button/button.component';
import { FormHangarComponent } from './components/form-hangar/form-hangar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHangarModifyComponent } from './views/hangar-modify/form-hangar-modify.component';
import { HangarNewComponent } from './views/hangar-new/hangar-new.component';
@NgModule({
  declarations: [
    HangarsComponent, HangarDetailComponent, SidebarComponent,
    SidebarToggleComponent,
    ButtonComponent,
    FormHangarComponent,
    FormHangarModifyComponent,
    HangarNewComponent
  ],
  imports: [
    CommonModule, HangarsRoutingModule, ReactiveFormsModule, TranslateModule
  ],
  exports: [HangarsComponent]
})

export class HangarsModule {
}
