import { Component, OnInit } from '@angular/core';
import { DataStrorageSrevice } from '../../shared/data-strorage.service';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
	authorized:boolean = false;

	constructor(private dataStore: DataStrorageSrevice,
				private recipeService: RecipeService,
				private authService : AuthService){}

	onSaveData(){
		this.dataStore.storeRecipes().subscribe(
			(response: Response) => { console.log(response['_body'])}
			)
	}

	onFetchData(){
		this.dataStore.fetchRecipes().subscribe(
			(response) => {
				console.log(response);
				this.recipeService.setRecipe(response);
			})
	}
	onLogOut(){
		this.authService.logOut();
	}

	ngOnInit(){
	   this.authorized = this.authService.isAuth()
	}
}
