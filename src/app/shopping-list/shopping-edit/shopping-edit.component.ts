import { Component,OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('formIn') slForm:NgForm;
  subscription:Subscription;
  editMode:boolean = false;
  editItemNumber: number;
  editItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.slService.startEdit.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editItemNumber = index;
        this.editItem = this.slService.getIngredient(index);
        console.log(this.editItem);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      });

  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount);
    if(this.editMode){
      this.slService.upadteIngredients(this.editItemNumber, newIngredient);
    } 
    else{
      this.slService.addIngredient(newIngredient);
    }

   this.editMode = false;
   form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }
  onDelete(){
    this.slService.deleteIngredients(this.editItemNumber);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
