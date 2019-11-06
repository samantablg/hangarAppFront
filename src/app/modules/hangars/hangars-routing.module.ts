import { HangarDetailComponent } from './views/hangar-detail/hangar-detail.component';
import { HangarsComponent } from './views/hangars/hangars.component';
import { FormHangarModifyComponent } from './views/hangar-modify/hangar-modify.component';
import { HangarNewComponent } from './views/hangar-new/hangar-new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HangarsComponent
    },
    {
      path: 'hangar/:id',
      component: HangarDetailComponent
    },
    {
        path: 'new',
        component: HangarNewComponent
    },
    {
        path: 'modify/:id',
        component: FormHangarModifyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HangarsRoutingModule {}
