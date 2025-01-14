import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsList(ingredientsList : Ingredient[]){
        this.ingredients.push(...ingredientsList);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}