class User{
  constructor(user) {
    this.is = user.id; 
    this.name = user.name; 
    this.pantry = user.pantry; 

  }

  displayFavorite(){
    return this.favoriteRecipes
  }

  displaySavedRecipes() {
    return this.recipesToCook;
  }

  storeRecipes(type,recipe){

  }

  removeRecipe(type,recipe){

  }

  filterRecipes(type,tag) {

  }

  searchRecipes(type,keyword){

  }

  loadRecipes(){

  }
}