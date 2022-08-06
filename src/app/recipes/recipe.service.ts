import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Gulab Jamun', 'King of Sweets',
            'https://th.bing.com/th/id/R.5985f8fe59d5f372b9a52a56c64ba0a5?rik=muYdi34g4OhhzA&riu=http%3a%2f%2fwww.cakeindustry.in%2fwp-content%2fuploads%2f2015%2f06%2fgulab_jamun.jpg&ehk=u%2bATwePmCumFC7ji%2bUoA82SsSyIVS5yCe8tzb0SCtlg%3d&risl=&pid=ImgRaw&r=0',
            [new Ingredient("Sugar", 1),
            new Ingredient("Rawa", 1)]),
        new Recipe('RasMalai', 'Raj Shahi Special', 'https://www.ruchiskitchen.com/wp-content/uploads/2017/02/easy-rasmalai-recipe-3.jpg',
            [new Ingredient("Milk", 1), new Ingredient("Mava", 2)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        //returing a copy instead of returning a reference to the exact array
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredientsList(ingredients);
    }
}