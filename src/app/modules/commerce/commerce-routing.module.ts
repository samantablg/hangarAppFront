import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommerceComponent } from './views/commerce/commerce.component';

const routes: Routes = [
    {
        path: '',
        component: CommerceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommerceRoutingModule {}
