import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerComponent } from './costumer/costumer.component';
import { LoginComponent } from './costumer/login/login.component';
import { RegisterUserComponent } from './costumer/register-user/register-user.component';
import { MainPlatesComponent } from './restaurant/main-plates/main-plates.component';
import { MenuUserComponent } from './restaurant/menu-user/menu-user.component';
import { PrincipalMenuComponent } from './restaurant/principal-menu/principal-menu.component';
import { ReserveComponent } from './restaurant/reserve/reserve.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const routes: Routes = [
  { path: 'restaurant', component: RestaurantComponent,
    children: [
      { path: 'principal-menu', component: PrincipalMenuComponent},
      { path: 'menu/main-plates', component: MainPlatesComponent},
      { path: 'menu/accompaniment', component: MainPlatesComponent},
      { path: 'menu/beverages', component: MainPlatesComponent},
      { path: 'menu/entries', component: MainPlatesComponent},
      { path: 'menu-user', component: MenuUserComponent},
      { path: 'reserve', component: ReserveComponent},
    ]
  },{ path: 'costumer', component: CostumerComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register-user', component: RegisterUserComponent },
    ]
  },
  {path:'', redirectTo:'costumer/login', pathMatch:'full'} /* esto va al final */
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
