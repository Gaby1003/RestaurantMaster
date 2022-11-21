import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RestaurantComponent } from './restaurant.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPlatesComponent } from './main-plates/main-plates.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MenuDomicileComponent } from './menu-domicile/menu-domicile.component';
import { ReserveComponent } from './reserve/reserve.component';

@NgModule({
  declarations: [
    RestaurantComponent,
    PrincipalMenuComponent,
    NavbarComponent,
    MainPlatesComponent,
    MenuUserComponent,
    MenuDomicileComponent,
    ReserveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  exports: [
    PrincipalMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RestaurantModule { }
