export function clearInputValue() {
    inputValue = ""

}

export function appendtoShoppingList(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}
