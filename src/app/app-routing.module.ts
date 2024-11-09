import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';

const routes: Routes = [
  { path: 'listProvider', component: ListProviderComponent },
  { path: 'addProvider', component: AddProviderComponent },
  { path: '', redirectTo: '/listProvider', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
