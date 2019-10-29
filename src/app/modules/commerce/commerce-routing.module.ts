import { OrderDetailsComponent } from './views/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommerceComponent } from './views/commerce/commerce.component';

const routes: Routes = [
    {
        path: '',
        component: CommerceComponent
    },
    {
      path: 'order',
      component: OrderDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommerceRoutingModule {}
