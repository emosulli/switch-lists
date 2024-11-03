//make lists
const sweetRecipes = ["muffins", "pies", "cookies", "cake"]
const spicyRecipes = ["noodles", "curry", "spicy cake", "evil cookies"]


//get elements by id
const displayRecipes = (list) => {
    const recipeList = document.getElementById('recipe-list');

    for (index in list) {
        const food = list[index];

        // create a new list item
        const newListItem = document.createElement('li');

        // update the text of that new list item to be food
        newListItem.textContent = food;
 
        // add the new list item to the unordered list on the screen
        recipeList.appendChild(newListItem);
    }

}
const recipeList = document.getElementById('recipe-list');

const switchList = () => {
    const sweetIsChecked = document.getElementById('sweet').checked;
    const spicyIsChecked = document.getElementById('spicy').checked;
}

recipeList.textContent = '';

//write if/else
if (sweetIsChecked) {
    displayRecipes(sweetRecipes);
} 
else if (spicyIsChecked) {
    displayRecipes(spicyRecipes);
}
else {
    recipeList.textContent = 'please choose an option'
}