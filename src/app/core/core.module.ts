import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { AuthGaurdService } from '../auth/auth-gaurd.service';
import { DataStrorageSrevice } from '../shared/data-strorage.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
  	HomeComponent,
  	HeaderComponent
  ],
  exports:[
  	AppRoutingModule,
  	HeaderComponent
  ],
  providers:[
  			  ShoppingListService, 
              RecipeService, 
              DataStrorageSrevice, 
              AuthService
              ]
})
export class CoreModule { }
