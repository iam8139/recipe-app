import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Gulab Jamun', 'King of Sweets', 
    'https://th.bing.com/th/id/R.5985f8fe59d5f372b9a52a56c64ba0a5?rik=muYdi34g4OhhzA&riu=http%3a%2f%2fwww.cakeindustry.in%2fwp-content%2fuploads%2f2015%2f06%2fgulab_jamun.jpg&ehk=u%2bATwePmCumFC7ji%2bUoA82SsSyIVS5yCe8tzb0SCtlg%3d&risl=&pid=ImgRaw&r=0'),
    new Recipe('RasMalai', 'Raj Shahi Special' ,'https://www.ruchiskitchen.com/wp-content/uploads/2017/02/easy-rasmalai-recipe-3.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
