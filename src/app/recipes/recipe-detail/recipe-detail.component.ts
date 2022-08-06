import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() pickedRecipe: Recipe;
  @Output() itemsAddedToSL = new EventEmitter<void>();
  constructor(private slService: ShoppingListService,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddItemToShoppingList() {
    let ingredients: Ingredient[] = this.pickedRecipe.ingredients;
    ingredients.forEach((value: Ingredient) => {
      this.slService.addIngredients(value);
      this.itemsAddedToSL.emit();
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.pickedRecipe.ingredients);
  }
}
