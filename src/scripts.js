// let ab =('Hello world');
// let siteData = 'siteData'
let currentUser = []


let recipeName = document.querySelector('.recipe__card--name');
let cooksName = document.querySelector('.user__name');
let mainRecipeContainer= document.querySelector('.main__recipe--container');
let favoriteArea = document.querySelector('.favorite-area');
let searchValue = document.querySelector('.main_recipe-search')


let jsSavedArea = document.querySelector('.js_saved-area');
let addToSaved = document.querySelector('.add_to-saved');
let showFavoritesBtn = document.querySelector('.favorite-filter');
let showSavedRecipesBtn = document.querySelector('.tocook-filter');
let clearSearchBtn = document.querySelector('.clear-filter');
let mainFavoriteSearch = document.querySelector('.main_favorite-search');
let favoriteButtons = document.querySelectorAll('.add_to-favorites');
let saveButtons = document.querySelectorAll('.add_to-save');
var acc = document.getElementsByClassName("accordion");



this.addEventListener("load", createCards)

//local storage 
localData = JSON.parse(localStorage.getItem('siteData'))
localStorage.setItem('siteData', JSON.stringify(siteData))
console.log(siteData)
console.log(localStorage.getItem('siteData'))


function createCards() { 
  recipeData.forEach(recipe => {
    let cardHtml = `` 
  <article class="recipe__card">
    <h3 class="recipe__card--title">recipe__card--title</h3>
    <ol>
      <li class="recipe__card--item"><span>Apple</span>
        <li class="recipe__card--item"><span>Bagel</span>
          <li class="recipe__card--item"><span>Zucchini</span>
        </ol>
          <div class="recipe__div--container">
            <input class="recipe__btns recipe__btn--favorite" type="button" value="favorite">
              <input class="recipe__btns recipe__btn--ingredients" type="button" value="ingredients">
                <input class="recipe__btns recipe__btn--save-for-later" type="button" value="save">
        ` </div>
      </article>
}

function createFavorite () { 

}

input.innerHTML = localData.siteName



// //toggle pantry view functions 
// function openSideBar() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeSideBar() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }