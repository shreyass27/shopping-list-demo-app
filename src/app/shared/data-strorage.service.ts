import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class  DataStrorageSrevice {
	
	constructor(private http: Http, private recipeService: RecipeService,
				private authService: AuthService) {
		// code...
	}

	storeRecipes(){
		const token = this.authService.getToken();
		return this.http.put('https://http-demo-e9ee9.firebaseio.com/data.json?auth='+token,this.recipeService.getRecipes());
	}

	fetchRecipes(){
		const token = this.authService.getToken();
		return this.http.get('https://http-demo-e9ee9.firebaseio.com/data.json?auth=' + token)
		.map(
			(response:Response) => {
				const data = response.json();
				for(let recipe of data){
					if(!recipe.ingredients){
						recipe.ingredients = [];
						console.log(recipe);
					}
				}
				return data;
			});
	}

}